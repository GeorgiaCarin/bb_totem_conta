import '../../../index.css'
import qrcode from '../../../assets/qrcode.png'
import woman from '../../../assets/woman_qrcode.png'
type props = {
     setSection : React.Dispatch<React.SetStateAction<number>>

}

export const StepFour = ({ setSection}:props) => {
  
    
    return (
        <div className=" relative flex flex-col toten:bg-qrcode h-full tablet:bg-none desktop:bg-none desktop:justify-center items-center bg-bb-blue laptop:border-bb-yellow desktop:border-[40px] toten:bg-cover gap-8 tablet:gap-5 text-center ">
      
                  <div className="  tablet:mt-4 toten:mt-24 desktop:mt-0 desktop:items-center">
                      <h1 className=' title-primary laptop:p-0  text-bb-yellow 2xdesktop:text-8xl 2xdesktop:mt-0 2'>Parabéns</h1>
                      <p className='text-primary toten:mx-20 text-white tablet:text-2xl '>Agora aponte a câmera do seu celular para op QRCODE
                      para iniciar a abertura de sua conta no Whatsapp.</p>
                  </div>
                    <img className=" w-[360px] tablet:w-[300px] border-[20px] tablet:border-[16px]" src={qrcode} alt="" />
                    <button onClick={() =>setSection(1)} className="btn-ylw z-20">CONCLUIR</button>
                    <img className='  toten:w-0 absolute bottom-0' src={woman} alt="" />
        </div>
    )
}