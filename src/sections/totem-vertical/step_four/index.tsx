import '../../../index.css'
import qrcode from '../../../assets/qrcode.png'
type props = {
     setSection : React.Dispatch<React.SetStateAction<number>>

}

export const StepFour = ({ setSection}:props) => {
    // setTimeout (() =>{
    //     setSection(1)
    // },60000)
    
    return (
        <div className=" flex flex-col  h-full items-center bg-qrcode bg-cover gap-8 tablet text-center ">
      
                  <div className="tablet:mt-12 toten:mt-24 items-center">
                      <h1 className='title-primary text-bb-yellow'>Parabéns</h1>
                      <p className='text-primary text-white leading-[40px]'>Agora aponte a câmera do seu celular para op QRCODE
                      para iniciar a abertura de sua conta no Whatsapp.</p>
                  </div>
                      <img className="w-[360px] border-[20px]" src={qrcode} alt="" />
                      <button onClick={() =>setSection(1)} className="btn-ylw">CONCLUIR</button>
        </div>
    )
}