import React, { useState } from "react";
import MainButton from "./UI/MainButton";


const ManualRegister = () => {
    
    const [emailWasClicked, setEmailWasClicked]= useState(false);
    const [passwordWasClicked, setPasswordWasClicked]= useState(false);
    const [email, setEmail] = useState("");

    const emailBlurHandler= () =>{
        setEmailWasClicked(true);
    }

    const passwordBlurHandler = () => {
        setPasswordWasClicked(true);
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    let showEmialMessage = emailWasClicked ? <p className="text-sm text-rose-600">Wpisz swój email</p>:''

    let showPasswordMessage = passwordWasClicked ? <p className="text-sm text-rose-600">Wpisz swoje hasło i użyj minimum 6 znaków</p>: <p className="text-sm">Hasło powinno zawierać minimum 6 znaków</p>
    
    return(
        <div className="flex flex-col">
            <label htmlFor="email">Adres email</label>
            <input type='text' value= {email} placeholder="Wpisz swój adres email" id='email' onChange={emailHandler} onBlur={emailBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            {showEmialMessage}
            <label htmlFor="password">Hasło</label>
            <input type='text' placeholder="Wpisz swoje hasło" id='password' onBlur={passwordBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            {showPasswordMessage}
            <p>Tworząc konto zgadzasz się na <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1sU_9q96lgBOrmDSA7V-DOrIbmHXvL-c1pc6WLQqZ6fY/edit">regulamin</a> i <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1kKOyWmcThexpCw5JbPvkdsoguF2wurqixAQwO1ELAjU/edit">politykę prywatności</a> Underline</p>
            <p>Po założeniu konta będziesz od nas otrzymywać wiadomości z poradami dotyczącymi nauki, a także ofertami specjalnymi od Underline. Możesz zrezygnować w każdej chwili.</p>
            <MainButton additionalStyle ='bg-blue-400 text-white hover:opacity-75'>Zarejestruj się</MainButton>
            <p>Masz już konto? <a className="text-blue-400 hover:text-opacity-75">Zaloguj się</a></p>
        </div>
    )
}

export default ManualRegister;