
import { Card } from '../../../components/card'
import '../../../index.css'
import seguranca from '../../../assets/segurança.png'
import ondeVoceEstiver from '../../../assets/ondeVoceEstiver.png'
import semCustos from '../../../assets/semCustos.png'
import cashback from '../../../assets/CashBack.png'
import shopping from '../../../assets/shoppingBB.png'
import facilidade from '../../../assets/Facilidade.png'
import { Button } from '../../../components/button'
import { useCallback, useEffect } from 'react'
import { Footer } from '../../../components/footer'

type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
//     section: number
}
type dataProps = {
    title: string,
    text: string,
    img_url: string

}

const data : dataProps[] = [
    {
        title: 'Segurança',
        text: 'Os seus dados e as suas transações estão sempre em um ambiente seguro, protegido pelo BB.',
        img_url: seguranca,
    },
    {
        title: 'Onde você estiver',
        text: 'Online no App BB, internet banking ou WhatsApp. Pelo telefone com o SAC e a Central de Relacionamento BB. Além das agência, caixas eletrônicos ou Correspondentes Mais BB.',
        img_url: ondeVoceEstiver,
    },
    {
        title: 'Sem custos',
        text: 'Online no App BB, internet banking ou WhatsApp. Pelo telefone com o SAC e a Central de Relacionamento BB. Além das agência, caixas eletrônicos ou Correspondentes Mais BB.',
        img_url: semCustos,
    },
    {
        title: 'Cashback, investimento ou pontos',
        text: 'Mais liberdade pra escolher o que usar e como usar.',
        img_url: cashback,
    },
    {
        title: 'Shopping BB',
        text: 'Cupons, Gift Cards e diversos produtos de marcas renomadas, com descontos e cashback.',
        img_url: shopping,
    },
    {
        title: 'Facilidade pra você',
        text: 'Pix gratuito, débitos e agendamentos automáticos, saldo em conta remunerado, plataforma de investimentos e o que mais precisar.',
        img_url: facilidade,
    },
]
export const StepTwo = ({setSection}:props) => {
    // const handleTime = useCallback(() => {
    //     console.log('começando')
    //     setTimeout(() => {
    //         setSection(1)
    //     }, 240000);
    // },[setSection])
   
    // useEffect(() => {
    //  handleTime()
    // },[handleTime])
    
    return (
        <div className=' flex flex-col h-screen w-full bg-vertical bg-cover gap-0 ' >
            <div className= ' h-full flex flex-1 w-full flex-col gap-5 desktop:gap-2 2xdesktop:gap-10 mt-24 desktop:mt-2 2xdesktop:mt-16 text-center items-center '>
                <div >
                    <h1 className='title-primary '>Vantagens para você</h1>
                    <p className='text-primary '>Abra sua conta corrente completa, totalmente digital, e simplifique sua vida financeira.</p>
                </div>
                <div className=' desktop:w-[100%] tablet:w-[100%] toten:w-auto tablet:overflow-auto tablet:pl-4 
                flex toten:inline-grid toten:grid-cols-3 gap-6 desktop:gap-4 desktop:flex desktop:overflow-auto 
                2xdesktop:justify-start desktop:justify-center'>
                        {data.map((item) => (
                            <div className=''>
                                <Card title={item.title} text={item.text} type='card' img={item.img_url}/>
                            </div>
                        ))}
                </div>
                <Button setSection={setSection} text='ABRIR SUA CONTA DIGITAL AGORA' style='btn-blue m-2 ' />
                
            </div>

            <div className=' flex-1 w-full content-end '>
                <Footer style='' />

            </div>
        </div>
    )
}