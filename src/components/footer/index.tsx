import logo from "../../assets/bb_logo_name.png"

export const Footer = () => {
    return(
        <div className="flex bg-bb-blue w-full justify-center items-center">
            <img className="w-48 h-fit " src={logo} alt="logo" />
        </div>
    )
}