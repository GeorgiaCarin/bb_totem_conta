import '../../../index.css'
import qrcode from '../../../assets/qrcode.png'
import woman from '../../../assets/woman_qrcode.png'
import homem from '../../../assets/homem.png'
import homemDesktop from '../../../assets/homemDesktop.png'
type props = {
     setSection : React.Dispatch<React.SetStateAction<number>>

}

export const StepFour = ({ setSection}:props) => {
  
    
    return (
        <div className=" relative flex flex-col toten:bg-qrcode h-full tablet:bg-none desktop:bg-none pt-[5%]
        items-center bg-bb-blue border-bb-yellow border-8 tablet:border-0 laptop:border-8 laptop:border-bb-yellow desktop:border-[20px] toten:bg-cover gap-5 text-center ">
      
                  <div className="  tablet:mt-4 toten:mt-24 desktop:mt-0 desktop:items-center">
                      <h1 className=' title-primary laptop:p-0  text-bb-yellow 2xdesktop:text-8xl 2xdesktop:mt-0 '>Parabéns</h1>
                      <p className='text-primary toten:mx-20 text-white tablet:text-2xl '>Agora aponte a câmera do seu celular para op QRCODE
                      para iniciar a abertura de sua conta no Whatsapp.</p>
                  </div>
                    <img className=" w-[280px] tablet:w-[300px] border-[20px] tablet:border-[16px] rounded-xl" src={qrcode} alt="" />
                    <button onClick={() =>setSection(1)} className="btn-ylw z-20">CONCLUIR</button>
                    <img className='w-0 toten:w-0 tablet:w-full absolute bottom-0 right-0' src={woman} alt="" />
                    <img className='tablet:hidden toten:w-0 w-full absolute bottom-0 right-0' src={homem} alt="" />
                    <img className=' px-56 w-0 desktop:w-full absolute bottom-0 right-0' src={homemDesktop} alt="" />
        </div>
    )
}