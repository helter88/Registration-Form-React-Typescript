
import useValidInput from "../hooks/useValidInput";
import MainButton from "./UI/MainButton";

const ManualRegister = () => {
    
    const [emailShowMessage, emailBind] =useValidInput("email");
    const [passwordShowMessage, passwordBind, passwordWasClicked, passwordIsValid ] =useValidInput("password");

    const diplayEmailMessage = emailShowMessage("","Wpisz poprawny adres email", "Wpisz swój adres email");
    const displayPasswordMessage = passwordShowMessage("Hasło powinno zawierać minimum 6 znaków","Hasło powinno zawierać minimum 6 znaków", "Wpisz swoje hasło i użyj minimum 6 znaków");


    const passwordColorWarning = `text-xs font-medium ${(passwordWasClicked && !passwordIsValid) ? "text-rose-400":'text-slate-500'}`
    
    return(
        <div className="flex flex-col border-t mt-3">
            <label className="mt-6 text-xs text-slate-500 font-medium" htmlFor="email">Adres email</label>
            <input type='text'{...emailBind} placeholder="Wpisz swój adres email" id='email' className="bg-slate-100 max-w-xl p-3 my-3 rounded-lg text-sm text-slate-500 placeholder-slate-500 outline-[1px] outline-blue-400" />
            <p className="text-xs font-medium text-rose-400">{diplayEmailMessage}</p>
            <label className=" mt-6 text-xs text-slate-500 font-medium"htmlFor="password">Hasło</label>
            <input type='password' {...passwordBind} placeholder="Wpisz swoje hasło" id='password' className="bg-slate-100 max-w-xl p-3 my-3 rounded-lg text-sm text-slate-500 placeholder-slate-500 outline-[1px] outline-blue-400 " />
            <p className={passwordColorWarning}>{displayPasswordMessage}</p>

            <p>Tworząc konto zgadzasz się na <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1sU_9q96lgBOrmDSA7V-DOrIbmHXvL-c1pc6WLQqZ6fY/edit">regulamin</a> i <a className="text-blue-400 hover:text-opacity-75" href="https://docs.google.com/document/d/1kKOyWmcThexpCw5JbPvkdsoguF2wurqixAQwO1ELAjU/edit">politykę prywatności</a> Underline</p>
            <p>Po założeniu konta będziesz od nas otrzymywać wiadomości z poradami dotyczącymi nauki, a także ofertami specjalnymi od Underline. Możesz zrezygnować w każdej chwili.</p>
            <MainButton additionalStyle ='bg-blue-400 text-white hover:opacity-75'>Zarejestruj się</MainButton>
            <p>Masz już konto? <a className="text-blue-400 hover:text-opacity-75">Zaloguj się</a></p>
            
        </div>
    )
}

export default ManualRegister;