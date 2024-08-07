type Props = {
    text: string
    type: string
    style: string
    setSection: React.Dispatch<React.SetStateAction<number>>
}

export const Button = ({text,type,style,setSection}:Props) => {
    const handleClick = () => {
        if(type=="voltar") {
            setSection((e) => e - 1)
        } else {
            setSection((e) => e + 1)
        }
    }
    return  (
        <button onClick={handleClick} className={`${style}`}>{text}</button>
    )
} 