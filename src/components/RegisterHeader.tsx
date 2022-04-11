import Dropdown from "./UI/Dropdown";

const underlineLogoLink= "data:image/png;base64,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"

interface RegisterHeaderTypes {
    styles: string
}

const RegisterHeader = (props: RegisterHeaderTypes )=>{
    return (
        <div className={props.styles}>
            <div className="flex w-full justify-center relative">
               <img className="w-24 h-7" src={underlineLogoLink} alt="Underline logo" />
                  <Dropdown style=" right-8 -top-2 absolute"/> 
            </div>
            
            
        </div>
    )
}
export default RegisterHeader;