import ManualRegister from "./ManualRegister";
import SocialMediaButton from "./UI/SocialMediaButton";

// const google = <svg className="icon-facebook">
//     <use xlink
    
// </svg>

const RegisterForm = () => {
    return(<div className="flex flex-col">
    <h3 className="p-1.5">Zarejestruj się</h3>
    <SocialMediaButton logo='' text=''>Kontynuj z Google</SocialMediaButton>
    <SocialMediaButton logo='' text=''>Kontynuj z Facebook</SocialMediaButton>
    <SocialMediaButton logo='' text=''>Kontynuj z Apple</SocialMediaButton>
    <ManualRegister />
    </div>)
}

export default RegisterForm;