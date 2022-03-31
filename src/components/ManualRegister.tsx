import React, { useState } from "react";
import MainButton from "./UI/MainButton";
import React, { useEffect, useState } from "react";


const ManualRegister = () => {
    
    const [emailWasClicked, setEmailWasClicked]= useState(false);
    const [passwordWasClicked, setPasswordWasClicked]= useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [emailIsValid, setEmailIsValid]= useState(false);
    const [passwordIsValid, setPasswordIsValid]= useState<string|boolean>('beginnig');

    const emailBlurHandler= () =>{
        setEmailWasClicked(true);
        validateEmail();
    }

    const passwordBlurHandler = () => {
        setPasswordWasClicked(true);
        
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setEmail(e.target.value);
    }

    useEffect(() =>{
        if(emailWasClicked){
            validateEmail();  
        }
    },[email])

    const passwordHandler=(e: React.ChangeEvent<HTMLInputElement> ) => {
        setPassword(e.target.value);
    }

    const validateEmail = () => {
        const regexEmial = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email.length){
        setEmailIsValid(regexEmial.test(email));  
        }
        
    }

<<<<<<< HEAD
    let showEmialMessage ;
    if(email.length && emailWasClicked && emailIsValid){
        showEmialMessage = ''
    }
    if(email.length && emailWasClicked && !emailIsValid){
        showEmialMessage = "Wpisz poprawny adres email"
    }
=======
    const validatePassword = () => {
        if(password.length){
            password.length>=6 ? setPasswordIsValid(true): setPasswordIsValid(false)
        }
    }

 
>>>>>>> 5ab7957 (refactor display worning to function)

    type showMessageTypes = (name:string, validMessage:string, invalidMessageOne:string, invalidMessageTwo: string ) => string

    const showMessage: showMessageTypes = (name, validMessage, invalidMessageOne, invalidMessageTwo) =>{
        if(eval(name).length && eval(name + "WasClicked") && eval(name + "IsValid")){
            return validMessage
        }
        if(eval(name).length && eval(name + "WasClicked") && !eval(name + "IsValid")){
            return invalidMessageOne
        }

        if(!eval(name).length && eval(name + "WasClicked")){
            return invalidMessageTwo
        }
            return validMessage

        }

    const diplayEmailMessage = showMessage('email',"","Wpisz poprawny adres email", "Wpisz swój adres email");
    
    

<<<<<<< HEAD
    let showPasswordMessage = passwordWasClicked ? <p className="text-sm text-rose-600">Wpisz swoje hasło i użyj minimum 6 znaków</p>: <p className="text-sm">Hasło powinno zawierać minimum 6 znaków</p>
=======
    const displayPasswordMessage = showMessage('password',"Hasło powinno zawierać minimum 6 znaków","Hasło powinno zawierać minimum 6 znaków", "Wpisz swoje hasło i użyj minimum 6 znaków");


    const passwordColorWarning = `text-sm ${(passwordWasClicked && !passwordIsValid) ? "text-rose-600":''}`
>>>>>>> 5ab7957 (refactor display worning to function)
    
    return(
        <div className="flex flex-col">
            <label htmlFor="email">Adres email</label>
            <input type='text' value= {email} placeholder="Wpisz swój adres email" id='email' onChange={emailHandler} onBlur={emailBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            <p className="text-sm text-rose-600">{diplayEmailMessage}</p>
            <label htmlFor="password">Hasło</label>
            <input type='text' value={password} placeholder="Wpisz swoje hasło" id='password' onChange={passwordHandler} onBlur={passwordBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
<<<<<<< HEAD
            {showPasswordMessage}
            <p>Tworząc konto zgadzasz się na <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1sU_9q96lgBOrmDSA7V-DOrIbmHXvL-c1pc6WLQqZ6fY/edit">regulamin</a> i <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1kKOyWmcThexpCw5JbPvkdsoguF2wurqixAQwO1ELAjU/edit">politykę prywatności</a> Underline</p>
            <p>Po założeniu konta będziesz od nas otrzymywać wiadomości z poradami dotyczącymi nauki, a także ofertami specjalnymi od Underline. Możesz zrezygnować w każdej chwili.</p>
            <MainButton additionalStyle ='bg-blue-400 text-white hover:opacity-75'>Zarejestruj się</MainButton>
            <p>Masz już konto? <a className="text-blue-400 hover:text-opacity-75">Zaloguj się</a></p>
=======
            <p className={passwordColorWarning}>{displayPasswordMessage}</p>
>>>>>>> 5ab7957 (refactor display worning to function)
        </div>
    )
}

export default ManualRegister;