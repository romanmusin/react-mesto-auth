import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import Login from "./Login";
import Register from "./Register";
import successReg from "../images/successReg.svg";
import failedReg from "../images/failedReg.svg";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth.js";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [selectedCardDelete, setSelectedCardDelete] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [message, setMessage] = React.useState({image: "", text: ""});
  const [userEmail, setUserEmail] = React.useState('email');
  const history = useHistory();

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  function handleClickDeleteCard(item) {
    setIsDeleteCardPopupOpen(true);
    setSelectedCardDelete(item);
  }

  function onCardClick(item) {
    setSelectedCard(item);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setSelectedCardDelete(null);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsInfo()])
      .then(([userInfo, loadCards]) => {
        setCurrentUser(userInfo);
        setCards(loadCards);
      })
      .catch((err) => console.log(err));
    checkToken();
  }, []);

  //Удаление Карточки
  function handleDeleteCard(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) =>
          cards.filter((cardElements) => cardElements._id !== card._id)
        );
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Лайк Карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(
      (userLiked) => userLiked._id === currentUser._id
    );

    api
      .toggleLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((cardElements) =>
            cardElements._id === card._id ? newCard : cardElements
          )
        );
      })
      .catch((err) => console.log(err));
  }

  //Изменение данных профиля
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Добавление Карточки
  function handleAddPlaceSubmit(item) {
    api
      .addCard(item)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Изменение Аватара
  function handleUpdateAvatar(data) {
    api
      .editAvatar(data)
      .then((userAvatar) => {
        setCurrentUser(userAvatar);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Закрытие попапов по оверлею
  React.useEffect(() => {
    const handleCloseByOverlay = (e) => {
      if (e.target.classList.contains("popup")) {
        closeAllPopups();
      }
    };
    document.addEventListener("mousedown", handleCloseByOverlay);
    return () =>
      document.removeEventListener("mousedown", handleCloseByOverlay);
  }, []);

  //Закрытие попапов по Esc
  React.useEffect(() => {
    const handleCloseByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keyup", handleCloseByEscape);
    return () => document.removeEventListener("keyup", handleCloseByEscape);
  }, []);

  
  

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      auth
        .checkingToken(jwt)
        .then((res) => {
          setUserEmail(res.data.email);
          setLoggedIn(true);
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleRegister = ({ password, email }) => {
    return auth
      .register(password, email)
      .then((dataReg) => {
        if (dataReg.data._id || dataReg.statusCode !== 400) {
          setUserEmail(dataReg.data.email);
          history.push("/sign-in");
          setIsInfoTooltipOpen(true);
          setMessage({
            image: successReg,
            text: "Вы успешно зарегистрировались!",
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setMessage({
          image: failedReg,
          text: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      });
  };

  const handleLogin = ({ password, email }) => {
    return auth.authorization(password, email)
    .then(dataLog => {
      if (dataLog.token || dataLog.statusCode === 200) {
        setLoggedIn(true);
        localStorage.setItem('jwt', dataLog.token);
        history.push('/');
        setUserEmail(email);
      } else {
        setIsInfoTooltipOpen(true);
        setMessage({ image: failedReg, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
      }
    })
    .catch(err => console.log(err));
  };

  const onSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header 
              email={userEmail}
              onSignOut={onSignOut}
               />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            isLoggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={onCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onClickDeleteCard={handleClickDeleteCard}
          />
          <Route path="/sign-in">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/sign-up">
            <Register onRegister={handleRegister} />
          </Route>
        </Switch>

        {loggedIn && <Footer />}

        <EditProfilePopup //Попап редактирования профиля
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <DeleteCardPopup
          onClose={closeAllPopups}
          onDeleteCard={handleDeleteCard}
          isOpen={isDeleteCardPopupOpen}
          deleteCard={selectedCardDelete}
        ></DeleteCardPopup>

        <ImagePopup item={selectedCard} onClose={closeAllPopups} />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          message={message}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
