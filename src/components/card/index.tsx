
type Props = {
    title: string,
    text:string
    type: string, 
    img: string

} 

export const Card = ({title,text,type,img}: Props) => {

    return (
        <div className={`${type}`}>
            <img className= ' h-48 w-full object-cover object-center tablet:h-fit 2xdesktop:w-full ' src={img} alt="" />
            <div className= ' text-left p-4 toten:p-6 leading-4 '>
                <div className='capitalize text-black text-3xl 2xdesktop:text-4xl leading-6 text-bb-lyellow font-extrabold pb-2' >{title}</div>
                <div className='text-lg leading-6 font-normal text-black toten:text-[15px] 2xdesktop:text-2xl toten:leading-5 2xdesktop:leading-9 tablet:text-xl '>{text}</div>
            </div>
  
        
        </div>
    )
}