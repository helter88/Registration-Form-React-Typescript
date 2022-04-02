interface SocMedProps{
    text: string
    logo: string;
}

const SocialMediaButton: React.FC<SocMedProps> = (props) => {
    return(
        <button className="max-w-xl p-1.5 border-2 my-3 rounded-lg">{props.children}</button>
    )
}
export default SocialMediaButton;