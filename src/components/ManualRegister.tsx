
import { useEffect, useState } from "react";
import useValidInput from "../hooks/useValidInput";
import MainButton from "./ui/MainButton";

const ManualRegister = () => {
    
    const [emailShowMessage, emailBind, emailWasClicked, emailIsValid, setEmailWasClicked] =useValidInput("email");
    const [passwordShowMessage, passwordBind, passwordWasClicked, passwordIsValid, setPasswordWasClicked ] =useValidInput("password");
    const [buttonIsValid, setButtonIsValid] = useState(true);

    useEffect(()=> {
        formIsValid();
    },[emailWasClicked, passwordWasClicked, emailIsValid, passwordIsValid ])

    const diplayEmailMessage = emailShowMessage("","Wpisz poprawny adres email", "Wpisz swój adres email");
    const displayPasswordMessage = passwordShowMessage("Hasło powinno zawierać minimum 6 znaków","Hasło powinno zawierać minimum 6 znaków", "Wpisz swoje hasło i użyj minimum 6 znaków");


    const passwordColorWarning = `text-xs font-medium ${(passwordWasClicked && !passwordIsValid) ? "text-rose-400":'text-slate-500'}`

    const formIsValid = () =>{
        if (emailWasClicked && !emailIsValid){
            setButtonIsValid(false)
            return;
        }
        if (passwordWasClicked && !passwordIsValid){
            setButtonIsValid(false)
            return;
        }
    
        if(emailWasClicked && passwordWasClicked){
            if(emailIsValid && passwordIsValid){
                setButtonIsValid(true)
                return;
            }else{
                setButtonIsValid(false)
                return;
            }
        }
        setButtonIsValid(true)
        return;
    }

    const formHandler = () => {

        if(!emailWasClicked && !passwordWasClicked){
            setButtonIsValid(false);
            setEmailWasClicked(true);
            setPasswordWasClicked(true);
            return;
        }
        if(emailWasClicked && !passwordWasClicked){
            setButtonIsValid(false);
            setEmailWasClicked(true);
            setPasswordWasClicked(true);
            return;
        }
        if(passwordWasClicked && !emailWasClicked){
            setButtonIsValid(false);
            setEmailWasClicked(true);
            setPasswordWasClicked(true);
            return;
        }
    }
    
    return(
        <div className="flex flex-col border-t mt-3">
            <label className="mt-6 text-xs text-slate-500 font-medium" htmlFor="email">Adres email</label>
            <input type='text'{...emailBind} placeholder="Wpisz swój adres email" id='email' className="bg-slate-100 max-w-xl p-3 my-3 rounded-lg text-sm text-slate-500 placeholder-slate-500 outline-[1px] outline-blue-400" />
            <p className="text-xs font-medium text-rose-400">{diplayEmailMessage}</p>
            <label className=" mt-6 text-xs text-slate-500 font-medium"htmlFor="password">Hasło</label>
            <input type='password' {...passwordBind} placeholder="Wpisz swoje hasło" id='password' className="bg-slate-100 max-w-xl p-3 my-3 rounded-lg text-sm text-slate-500 placeholder-slate-500 outline-[1px] outline-blue-400 " />
            <p className={passwordColorWarning}>{displayPasswordMessage}</p>

            <p className="mt-6 text-xs text-slate-500 font-medium">Tworząc konto zgadzasz się na <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1sU_9q96lgBOrmDSA7V-DOrIbmHXvL-c1pc6WLQqZ6fY/edit">regulamin</a> i <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1kKOyWmcThexpCw5JbPvkdsoguF2wurqixAQwO1ELAjU/edit">politykę prywatności</a> Underline</p>
            <p className="mt-6 text-xs text-slate-500 font-medium">Po założeniu konta będziesz od nas otrzymywać wiadomości z poradami dotyczącymi nauki, a także ofertami specjalnymi od Underline. Możesz zrezygnować w każdej chwili.</p>
            <MainButton additionalStyle ="mt-6 py-3 text-xs font-semibold bg-blue-500 opacity-80 text-white hover:opacity-60 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed disabled:hover:opacity-80" disabled={!buttonIsValid} onClick={formHandler}>Zarejestruj się</MainButton>
            <p className="my-6 w-full flex justify-center text-sm text-slate-500">Masz już konto? <a className="text-blue-400 hover:text-opacity-75 ml-1 font-medium cursor-pointer">Zaloguj się</a></p>
            
        </div>
    )
}

export default ManualRegister;