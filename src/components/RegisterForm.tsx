import ManualRegister from "./ManualRegister";
import SocialMediaButton from "./UI/SocialMediaButton";

const RegisterForm = () => {
    return(<div className="flex flex-col">
    <h3 className="p-1.5">Zarejestruj się</h3>
    <SocialMediaButton logo='' text='Kontynuj z Google' />
    <SocialMediaButton logo='' text='Kontynuj z Facebook' />
    <ManualRegister />
    </div>)
}

export default RegisterForm;