type Props = {
    classInput: string
    text: string
    placeHolder: string
}

export const Input = ({classInput, text, placeHolder}:Props) => {
  
    return (
        <div className={` ${classInput} flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
            <label className="ml-4 font-semibold text-4xl" htmlFor="">{text}</label>
            <input className="p-4 bg-black/70 text-white border-b-4 text-3xl border-bb-blue rounded-xl" placeholder={placeHolder} type="text" />
        </div>
    )
}