import { NavBar } from "../sidebar/navbar"
import logobbyellow from '../../assets/logo-bb-yellow.svg'
import { Button } from "../button"


type props = {
    setSection: React.Dispatch<React.SetStateAction<number>>
    shadow: boolean
    section: number
}

export const Menu = ({setSection,shadow, section}: props) => {
    
    return (
        <div className={` py-4 px-8 bg-bb-lblue flex  place-content-between place-items-center rounded-full ${shadow == false ? '' :'shadow-3xl'} `}>
            <Button text="voltar" style="btn-ylw "  type="voltar" setSection={setSection}/>
            <div className=" w-96">
                <NavBar section={section} />
            </div>
            
        </div>
    )
}