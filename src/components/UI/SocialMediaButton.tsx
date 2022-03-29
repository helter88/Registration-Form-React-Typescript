interface SocMedProps{
    text: string
    logo: string;
}

const SocialMediaButton = (props: SocMedProps) => {
    return(
        <button className="max-w-xl p-1.5 border-2 my-3 rounded-lg">{props.text}</button>
    )
}
export default SocialMediaButton;