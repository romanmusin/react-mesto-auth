import React from "react";
import { Link, useHistory } from 'react-router-dom';
import successReg from '../images/successReg.svg';
import failedReg from '../images/failedReg.svg';

function Register ({ onRegister, setIsInfoTooltip, setImgInfoTooltip, setTextInfoTooltip }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')
    const history = useHistory()

    function handleChangeName (evt) {
        setEmail(evt.target.value)
    }

    function handleChangePassword (evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit (evt) {
        evt.preventDefault()
        setIsInfoTooltip(true)
        onRegister({email, password})
            .then(() => {
                
                    setEmail('')
                    setPassword('')
                    setTextInfoTooltip('Вы успешно зарегестрировались')
                    setImgInfoTooltip(successReg)
                    history.push('/sing-in')
            })
            
            .catch((err) => {
                setImgInfoTooltip(failedReg)
                setTextInfoTooltip('Что-то пошло не так! Попробуйте ещё раз.')
                console.log(err)
            })
    }

    return (
        <div className="login">
            <h2 className="login__title"> Регистрация </h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input type="email" id="email" className="login__input" placeholder="Email" onChange={handleChangeName} value={email}/>
                <input type="password" id="password" className="login__input"  placeholder="Пароль" onChange={handleChangePassword} value={password}/>
                <button type="submit" className="login__button">Зарегестрироваться</button>
            </form>
               
            <p>Уже зарегестрированы? 
                <Link to="/sing-in" className="login__link"> Войти </Link>
            </p>
        </div>
    )
}

export default Register;