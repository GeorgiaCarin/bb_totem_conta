type Props = {
    title: string,
    text:string

    type: string
} 

export const Card = ({title,text,type}: Props) => {

    return (
        <div className={`${type}`}>
            <div className='rounded-xl w-20 h-20 bg-bb-yellow text-center  text-5xl lg:text-3xl uppercase'>{}</div>
            <div className="bg-bb-yellow h-8 w-1"></div>
            <div>
                <div className=' uppercase text-bb-yellow text-md text-bb-lyellow font-extrabold' >{title}</div>
                <div className='font-medium text-white text-sm lg:text-lg  '>{text}</div>
            </div>
  
        
        </div>
    )
}