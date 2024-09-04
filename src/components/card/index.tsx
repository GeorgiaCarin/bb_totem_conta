import { useEffect, useRef } from "react"

type Props = {
    title: string,
    text:string
    type: string, 
    img: string

} 

export const Card = ({title,text,type,img}: Props) => {


    return (
        <div className={`${type}`}>
            <img className= ' min-h-44 w-full object-cover object-center 2xdesktop:w-full ' src={img} alt="" />
            <div className= ' text-left p-4 toten:p-6 leading-4 '>
                <div className='capitalize text-black text-3xl 2xdesktop:text-4xl leading-6  text-bb-lyellow font-extrabold pb-2' >{title}</div>
                <div className='text-lg leading-6 font-normal text-black toten:text-[15px] tablet:text-md 2xdesktop:text-xl toten:leading-5 2xdesktop:leading-9 '>{text}</div>
            </div>
  
        
        </div>
    )
}