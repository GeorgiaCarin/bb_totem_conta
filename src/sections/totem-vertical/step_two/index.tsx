
import { Card } from '../../../components/card'
import arrow from '../../../assets/arrow.svg'
import '../../../index.css'


type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
//     section: number
}

export const StepTwo = ({setSection}:props) => {
    
    return (
        <div className=' flex flex-col h-screen w-screen bg-vertical min-h-screen bg-cover justify-between'>
            <div className= 'flex w-full flex-col gap-5 mt-24 text-center items-center'>
                <div>
                    <h1 className='font-black text-6xl text-bb-blue p-10  capitalize'>Vantagens para você</h1>
                    <p className='font-normal text-3xl w-[763px]'>Abra sua conta corrente completa, totalmente digital, e simplifique sua vida financeira.</p>

                </div>
                <div className='inline-grid grid-cols-3 gap-6 '>
                   
                        <Card title='Segurança' text='Os seus dados e as suas transações estão sempre em um ambiente seguro, protegido pelo BB.' icon='icon' type='card ' />
                        

                </div>

            </div>
            
        </div>
    )
}