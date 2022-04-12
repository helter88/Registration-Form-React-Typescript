import ManualRegister from "./ManualRegister";
import SocialMediaButton from "./UI/SocialMediaButton";
import googleLogo from "../icons/logos/Google__logo.svg"
import facebookLogo from "../icons/logos/facebook-logo.svg"
import appleLogo from "../icons/logos/apple_logo.svg"


const RegisterForm = () => {
    return(<div className="flex flex-col">
    <h3 className="p-1.5 text-xl font-bold text-slate-800">Zarejestruj się</h3>
    <SocialMediaButton logo={googleLogo} alt="Google logo">Kontynuuj z Google</SocialMediaButton>
    <SocialMediaButton logo= {facebookLogo} alt="Facebook logo">Kontynuuj z Facebook</SocialMediaButton>
    <SocialMediaButton logo= {appleLogo} alt="AppleLogo">Kontynuuj z Apple</SocialMediaButton>
    <ManualRegister />
    </div>)
}

export default RegisterForm;