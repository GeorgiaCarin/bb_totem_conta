
import { Menu } from '../../../components/menu'

import '../../../index.css'

import { Controller, useForm } from 'react-hook-form'

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Box, TextField } from '@mui/material'

type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
    section: number
}
const dataSchema = z.object({
        nome: z.string(),
        cpf: z.number({ errorMap: () => ({ message: "CPF inválido" }) }).min(14,'CPF inválido'),
        whatsapp: z.string()

    }) 
export const StepThree = ({setSection, section}:props) => {
    type FormData = z.infer<typeof dataSchema>;

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(dataSchema)
    })
    const onSubmit = (data:FormData) => console.log(data.cpf) 

    return (
        <div className='flex flex-col bg-dados bg-cover w-screen h-screen gap-4 p-16'>
    
            <h1 className=' text-bb-blue uppercase text-6xl font-semibold text-center mt-8' >Informe seus dados</h1>
            <div className=' flex flex-col flex-1 gap-8 mt-8'>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col flex-1 gap-8 mt-4'>
                <TextField  label="Nome" variant='' />
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
                    <label className="ml-4 font-semibold text-4xl" htmlFor="">Nome</label>
                    <input  className="p-4 text-white border-4 bg-transparent text-3xl border-bb-blue rounded-xl" placeholder="Insira seu Nome" type="text" {...register('nome')}/>
                </div>
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
                    <label className="ml-4 font-semibold text-4xl" htmlFor="">Email</label>
                    <input  className="p-4  text-white border-4 bg-transparent text-3xl border-bb-blue rounded-xl" placeholder="Insira seu Nome" type="text" {...register('nome')}/>
                </div>
                <div className='flex gap-4 flex-col lg:flex-row '>
                    <div className={`flex flex-col flex-1 uppercase gap-0 text-bb-blue font-medium text-xl`}>
                        <label className="ml-4 font-semibold text-4xl" htmlFor="">CPF</label>

                        <input className="p-4  text-white bg-transparent border-4 text-3xl border-bb-blue rounded-xl"  placeholder="000.000.000-00" type="text" {...register('cpf')}/>
                    </div>
                    <div className={`flex flex-col flex-1 gap-0 text-bb-blue font-medium text-xl`}>
                        <label className="ml-4 font-semibold text-4xl" htmlFor="">WhatsApp</label>
                        <input required className="p-4 bg-transparent border-4 text-3xl border-bb-blue rounded-xl" placeholder='(00) 0 0000 - 0000' type="text" {...register('whatsapp')}/>
                        
                    </div>
                    
                    
                </div>
                <input className='btn-blue w-64 place-self-center'  type='submit' value='Validar Dados'/>
            </form>

            </div>
            <div  className=''>
          

            </div>
     
        </div>
    )
}