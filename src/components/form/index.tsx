import { useForm } from "react-hook-form"
import {z} from 'zod'

export const Form = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => console.log(data) 
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col flex-1 gap-8 mt-8'>
            <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
                <label className="ml-4 font-semibold text-4xl" htmlFor="">Nome</label>
                <input className="p-4 bg-black/70 text-white border-b-4 text-3xl border-bb-blue rounded-xl" placeholder="Insira seu Nome" type="text" {...register('nome')}/>
            </div>
            <div className='flex gap-4'>
                <div className={`flex flex-col flex-1 uppercase gap-0 text-bb-blue font-medium text-xl`}>
                    <label className="ml-4 font-semibold text-4xl" htmlFor="">CPF</label>
                    <input className="p-4 bg-black/70 text-white border-b-4 text-3xl border-bb-blue rounded-xl" placeholder="000.000.000-00" type="text" {...register('CPF')}/>
                </div>
                <div className={`flex flex-col flex-1 gap-0 text-bb-blue font-medium text-xl`}>
                    <label className="ml-4 font-semibold text-4xl" htmlFor="">WhatsApp</label>
                    <input className="p-4 bg-black/70 text-white border-b-4 text-3xl border-bb-blue rounded-xl" placeholder='(00) 0 0000 - 0000' type="text" {...register('WhatsApp')}/>
                </div>
                
                
            </div>
            <input className='btn-blue w-64 place-self-center' type='submit' value='Validar Dados'/>
        </form>

    )
}