type Props = {
    text: string
    style: string
    setSection: React.Dispatch<React.SetStateAction<number>>
}

export const Button = ({text,style,setSection}:Props) => {
    const handleClick = () => {
        setSection((e) => e +1)
    }
    return  (
        <button onClick={handleClick} className={`${style} `}>{text}</button>
    )
} 