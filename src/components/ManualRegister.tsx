import { useState } from "react";


const ManualRegister = () => {
    
    const [emailWasClicked, setEmailWasClicked]= useState(false);
    const [passwordWasClicked, setPasswordWasClicked]= useState(false);

    const emailBlurHandler= () =>{
        setEmailWasClicked(true);
    }

    const passwordBlurHandler = () => {
        setPasswordWasClicked(true);
    }

    let showEmialMessage = emailWasClicked ? <p className="text-sm text-rose-600">Wpisz swój email</p>:''

    let showPasswordMessage = passwordWasClicked ? <p className="text-sm text-rose-600">Wpisz swoje hasło i użyj minimum 6 znaków</p>: <p className="text-sm">Hasło powinno zawierać minimum 6 znaków</p>
    
    return(
        <div className="flex flex-col">
            <label htmlFor="email">Adres email</label>
            <input type='text' placeholder="Wpisz swój adres email" id='email' onBlur={emailBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            {showEmialMessage}
            <label htmlFor="password">Hasło</label>
            <input type='text' placeholder="Wpisz swoje hasło" id='password' onBlur={passwordBlurHandler} className="bg-blue-100 max-w-xl p-1.5 border-2 my-3 rounded-lg" />
            {showPasswordMessage}
        </div>
    )
}

export default ManualRegister;