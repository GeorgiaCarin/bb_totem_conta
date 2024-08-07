
import { Card } from '../../../components/card'
import arrow from '../../../assets/arrow.svg'
import '../../../index.css'


type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
//     section: number
}

export const StepTwo = ({setSection}:props) => {
    return (
        <div className=' flex flex-col h-screen w-screen bg-conta min-h-screen bg-cover justify-between'>
            <div className=' flex w-[800px] flex-col gap-5 mt-24 ml-12'>
                <div>
                    <h1 className='font-black text-7xl text-bb-blue '>Abra sua Conta</h1>
                    <p className='font-normal text-2xl'>Abra sua conta corrente completa, totalmente digital, e simplifique sua vida financeira.</p>

                </div>
                <div className='flex gap-4 '>
                    <div className='flex flex-col gap-4'>
                        <Card title='Conta Digital' text='Completa e Gratuita' icon='icon' type='card bg-bb-blue' />
                        <Card title='Cartão de Crédito sem anuidade' text='Simples, fácil e rápido!' icon='icon' type='card ' />

                    </div >
                    <div className='flex flex-col gap-4'>
                        <Card title='Conta Digital' text='Completa e Gratuita' icon='icon' type='card ' />
                        <Card title='Cartão de Crédito sem anuidade' text='Simples, fácil e rápido!' icon='icon' type='card bg-bb-blue' />

                    </div >
        
                </div>

            </div>
            <div onClick={() => setSection((e)=>e+1)} className=' flex flex-col animate-bounce duration-300 delay-150 items-center justify-center text-center content-center '>
                <img className='w-24 text-black -rotate-90  ' src={arrow} alt="aaaaaaaaaaaa" />
                <p className='text-white text-3xl font-bold pb-4'>Abra já sua conta</p>
            </div>
        </div>
    )
}