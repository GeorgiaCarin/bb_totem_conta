import { Menu } from '../../../components/menu'
import '../../../index.css'
import qrCode from '../../../assets/qr-sucesso 1.png'
import mao from '../../../assets/mao.png'
type props = {
     setSection : React.Dispatch<React.SetStateAction<number>>
    section: number
}

export const StepFour = ({section, setSection}:props) => {
    return (
        <div className=' flex flex-col w-screen h-screen bg-dados bg-cover p-12'>

            <div className='relative flex flex-col justify-center items-center bg-bb-lblue  h-full mx-16 mb-12 rounded-2xl'>
                <div className='  flex justify-center content-center'>
                    <img className='flex absolute  -bottom-6 left-0 ' src={mao} alt="" />
                    <div className='h-32 w-1 place-self-center bg-bb-yellow rounded-full m-4' > </div>
                    <div className='flex flex-col h-full w-[480px] absolute right-0 text-center place-self-center justify-center pr-32  content-center '>
                        <h1 className='title-primary text-5xl text-bb-yellow'>Tudo pronto</h1>
                        <p className='text-primary pb-4 text-white'>agora basta continuar pelo seu celular com este QrCode</p>
                        <img className=' rounded-lg' src={qrCode} alt="" />

                    </div>
                </div>        
            </div>
            <Menu shadow={true} section={section} setSection={setSection} />
        </div>
    )
}