interface SocMedProps{
    logo: string;
    alt: string;
}

const SocialMediaButton: React.FC<SocMedProps> = (props) => {
    return(
        <button className="max-w-xl p-3 border my-3 rounded-lg hover:border-blue-400 flex"><img src={props.logo} alt={props.alt} className="h-5 ml-1"/><p className="w-full text-center text-xs font-semibold">{props.children}</p></button>
    )
}
export default SocialMediaButton;