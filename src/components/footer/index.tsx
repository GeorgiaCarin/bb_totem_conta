import logo from "../../assets/bb_logo_name.png"
type Props = {
    style:string
}
export const Footer = ({style}:Props) => {
    return(
        <div className={`${style} flex bg-bb-blue toten:p-28 tablet:p-5 desktop:p-4 w-full justify-center items-center`}>
            <img className=" h-fit " src={logo} alt="logo" />
        </div>
    )
}