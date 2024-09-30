import logo from "../img/logo.webp";


type Props = {
    className?: string
}

export function Logo({className}: Props) {
    return (
        <a href={'/'}>
            <img src={logo} alt="logo" className={className}/>
        </a>
    );
}
