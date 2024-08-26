import logo from "../../assets/bb_logo_name.png"
import logo2 from "../../assets/logo2.png"
type Props = {
    style:string
}
export const Footer = ({style}:Props) => {
    return(
        <div className={`${style} p-4 flex bg-bb-blue toten:p-28 tablet:p-5 desktop:p-2 w-full justify-center items-center`}>
            <img className="w-0 tablet:w-48 laptop:w-fit  h-fit " src={logo} alt="logo" />
            <img className="w-56  tablet:w-0" src={logo2} alt="logo" />
        </div>
    )
}