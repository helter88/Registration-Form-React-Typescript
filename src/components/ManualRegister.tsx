import React, { useState } from "react";
import MainButton from "./UI/MainButton";
import React, { useEffect, useState } from "react";


const ManualRegister = () => {
    
    const [emailShowMessage, emailBind] =useValidInput("email");
    const [passwordwShowMessage, passwordBind, passwordWasClicked, passwordIsValid ] =useValidInput("password");

    const diplayEmailMessage = emailShowMessage("","Wpisz poprawny adres email", "Wpisz swój adres email");
    const displayPasswordMessage = passwordwShowMessage("Hasło powinno zawierać minimum 6 znaków","Hasło powinno zawierać minimum 6 znaków", "Wpisz swoje hasło i użyj minimum 6 znaków");


    const passwordColorWarning = `text-sm ${(passwordWasClicked && !passwordIsValid) ? "text-rose-600":''}`
    
    return(
        <div className="flex flex-col">
            <label htmlFor="email">Adres email</label>
            <input type='text' value= {email} placeholder="Wpisz swój adres email" id='email' onChange={emailHandler} onBlur={emailBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            <p className="text-sm text-rose-600">{diplayEmailMessage}</p>
            <label htmlFor="password">Hasło</label>
            <input type='text' value={password} placeholder="Wpisz swoje hasło" id='password' onChange={passwordHandler} onBlur={passwordBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            {showPasswordMessage}
            <p>Tworząc konto zgadzasz się na <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1sU_9q96lgBOrmDSA7V-DOrIbmHXvL-c1pc6WLQqZ6fY/edit">regulamin</a> i <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1kKOyWmcThexpCw5JbPvkdsoguF2wurqixAQwO1ELAjU/edit">politykę prywatności</a> Underline</p>
            <p>Po założeniu konta będziesz od nas otrzymywać wiadomości z poradami dotyczącymi nauki, a także ofertami specjalnymi od Underline. Możesz zrezygnować w każdej chwili.</p>
            <MainButton additionalStyle ='bg-blue-400 text-white hover:opacity-75'>Zarejestruj się</MainButton>
            <p>Masz już konto? <a className="text-blue-400 hover:text-opacity-75">Zaloguj się</a></p>
            <input type='text' {...passwordBind} placeholder="Wpisz swoje hasło" id='password' className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            <p className={passwordColorWarning}>{displayPasswordMessage}</p>
        </div>
    )
}

export default ManualRegister;