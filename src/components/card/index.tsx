import seguranca from '../../assets/segurança.png'

type Props = {
    title: string,
    text:string
    type: string, 
    img: string

} 

export const Card = ({title,text,type,img}: Props) => {

    return (
        <div className={`${type}`}>
            <img className='' src={img} alt="" />
            <div className= ' text-left p-4 toten:p-6 leading-4 '>
                <div className='capitalize text-black text-2xl  leading-6 text-bb-lyellow font-extrabold  pb-2' >{title}</div>
                <div className='font-normal text-black toten:text-[15px] toten:leading-5 tablet:text-xl '>{text}</div>
            </div>
  
        
        </div>
    )
}