interface SocMedProps{
    text: string
    logo: string;
}

const SocialMediaButton: React.FC<SocMedProps> = (props) => {
    return(
        <button className="max-w-xl p-1.5 border my-3 rounded-lg hover:border-blue-400">{props.children}</button>
    )
}
export default SocialMediaButton;