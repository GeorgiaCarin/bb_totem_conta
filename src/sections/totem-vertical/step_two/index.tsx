
import { Card } from '../../../components/card'
import '../../../index.css'
import seguranca from '../../../assets/segurança.png'
import ondeVoceEstiver from '../../../assets/ondeVoceEstiver.png'
import semCustos from '../../../assets/semCustos.png'
import cashback from '../../../assets/CashBack.png'
import shopping from '../../../assets/shoppingBB.png'
import facilidade from '../../../assets/Facilidade.png'
import { Button } from '../../../components/button'
import { useCallback, useEffect, useRef } from 'react'
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
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const handleTime = useCallback(() => {
        console.log('começando')
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    
        timeoutRef.current = setTimeout(() => {
            setSection(1)
        }, 240000);
    },[setSection])
   
    useEffect(() => {
     handleTime()
     return () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    },[handleTime])
    
    return (
        <div className='flex flex-col h-full w-screen bg-bb-yellow tablet:bg-vertical bg-cover gap-0' onClick={handleTime}>
            <div className='h-full flex w-full flex-col gap-4 desktop:gap-2 mt-8 toten:mt-16 2xdesktop:gap-10  tablet:mt-24 desktop:mt-[2%] text-center items-center'>
                <div>
                    <h1 className='title-primary py-2'>Vantagens para você</h1>
                    <p className="text-primary before:content-['Confira_as_Vantagens_da_Conta_Corrente_Digital_BB'] tablet:before:content-['Abra_sua_conta_corrente_completa,_totalmente_digital,_e_simplifique_sua_vida_financeira.']"></p>
                </div>
                <div className='w-full toten:w-auto desktop:w-full desktop:flex  overflow-auto  desktop:overflow-auto px-4 flex toten:inline-grid toten:grid-cols-3 gap-6 desktop:gap-4'>
                {data.map((item) => (
                    <div key={item.title}>
                    <Card title={item.title} text={item.text} type='card' img={item.img_url}/>
                    </div>
                ))}
                </div>
                <Button text='' setSection={setSection} style='btn-blue m-2'/>
            </div>
            <div className='w-full content-end'>
                <Footer style=''/>
            </div>
        </div>

    )
}