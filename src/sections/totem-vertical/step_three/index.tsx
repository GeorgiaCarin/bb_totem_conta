

import '../../../index.css'

import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import InputMask from 'react-input-mask'
import { api_data } from '../../../api/contabb'
import { useCallback, useEffect, useState } from 'react'

type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>

}
const dataSchema = z.object({
        nome: z.string({ errorMap: () => ({ message: "Nome necessário" }) }).min(4),
        email: z.string({ errorMap: () => ({ message: "email necessário" }) }).min(4),
        cpf: z.string({ errorMap: () => ({ message: "CPF necessário" }) }).min(11,'CPF inválido'),
        whatsapp: z.string({ errorMap: () => ({ message: "Número necessário" }) }).min(11)

    }) 
export const StepThree = ({setSection}:props) => {

    const handleOpen = () => {
        setSection((e) => e + 1)
    }
    
    type FormData = z.infer<typeof dataSchema>;
    
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(dataSchema)
    })
    
    const handleTime = useCallback(() => {
   
        setTimeout(() => {


            setSection(1)
        }, 120000);
    },[setSection])
    const onSubmit = async (data:FormData) => {

        try{
            const response = await api_data.post('/user',{
                cpf: data.cpf,
                email: data.email,
                name: data.nome,
                phone: data.whatsapp
                
            })
            if(response.status == 200) {
                
                handleOpen()
                
            }
            
            
        }catch(err) {
            console.log('erro ao validar dados'+ err)
        }
    }
    

    return (
        <div className='flex flex-col w-full  bg-formulario h-full bg-cover  gap-4 p-16 ' onClick={handleTime}>
            
            <div className= 'flex w-full flex-col mt-24 text-center items-center'>
                <div>
                    <h1 className='title-primary'>Vantagens para você</h1>
                    <p className='text-primary'>Insira seus dados e envie o formulário para criar sua conta agora mesmo!</p>
                </div>
                
                
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col flex-1 gap-2 mt-4'>
                
                        <input className={`${errors.nome ? 'border-red-600 border-4 placeholder:text-red-400': '' } w-[700px] h-16 text-2xl p-4 `} placeholder={errors.nome? errors.nome.message: 'Nome'} {...register('nome')} />
                        
                        <input className={`${errors.email ? 'border-red-600 border-4 placeholder:text-red-400 ': '' }w-[700px] h-16 text-2xl p-4`}  placeholder={errors.email? errors.email.message: 'Email'}   {...register('email')}/>
                        <InputMask className={`${errors.cpf ? 'border-red-600 border-4 placeholder:text-red-400 ': '' } w-[700px] h-16 text-2xl p-4`} placeholder={errors.cpf? errors.cpf.message: 'CPF'} mask="999.999.999-99"  {...register('cpf')}/>
                        <InputMask className={`${errors.whatsapp ? 'border-red-600 border-4 placeholder:text-red-400 ': '' }w-[700px] h-16 text-2xl p-4`} placeholder={errors.whatsapp? errors.whatsapp.message: 'WhatsApp'} mask="(99)99999-9999"  {...register('whatsapp')}/>
                                
                        
                    <input className='btn-blue place-self-center mt-6' type='submit' value='ENVIAR'/>
                </form>
            </div>
   
           
    
            
         
     
        </div>
    )
}