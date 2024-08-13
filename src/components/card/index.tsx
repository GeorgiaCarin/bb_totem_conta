import seguranca from '../../assets/segurança.png'

type Props = {
    title: string,
    text:string
    type: string, 

} 

export const Card = ({title,text,type}: Props) => {

    return (
        <div className={`${type}`}>
            <img className='' src={seguranca} alt="" />
            <div className= ' text-left p-6'>
                <div className=' capitalize text-black text-2xl text-bb-lyellow font-extrabold  pb-2' >{title}</div>
                <div className='font-normal text-black text-[15px] '>{text}</div>
            </div>
  
        
        </div>
    )
}