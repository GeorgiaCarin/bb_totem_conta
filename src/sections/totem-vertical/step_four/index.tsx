import '../../../index.css'
import qrcode from '../../../assets/qrcode.png'
type props = {
     setSection : React.Dispatch<React.SetStateAction<number>>

}

export const StepFour = ({ setSection}:props) => {
    setTimeout (() =>{
        setSection(1)
    },60000)
    
    return (
        <div className=" flex flex-col items-center bg-qrcode bg-cover gap-16 text-center ">
      
                  <div className="mt-24 items-center">
                      <h1 className='title-primary text-bb-yellow'>Parabéns</h1>
                      <p className='text-primary text-white leading-[40px]'>Agora aponte a câmera do seu celular para op QRCODE
                      para iniciar a abertura de sua conta no Whatsapp.</p>
                  </div>
                      <img className="w-[420px] border-[20px]" src={qrcode} alt="" />
                      <button onClick={() =>setSection(1)} className="btn-ylw">CONCLUIR</button>
        </div>
    )
}