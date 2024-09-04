

import '../../../index.css'

import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import InputMask from 'react-input-mask'
import { api_data } from '../../../api/contabb'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Footer } from '../../../components/footer'

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
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const handleTime = useCallback(() => {
        console.log('começando')
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    
        timeoutRef.current = setTimeout(() => {
            setSection(1)
        }, 120000);
    },[setSection])
   
    useEffect(() => {
     handleTime()
     return () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    },[handleTime])
       
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
        <div className='flex flex-col w-full bg-bb-yellow tablet:bg-formulario h-full bg-cover gap-4 pt-10  desktop:justify-center' onClick={handleTime} >
            
            <div className= ' flex w-full flex-col tablet:mt-12 toten:mt-24  desktop:mt-0 text-center items-center'>
                <div>
                    <h1 className='title-primary tv:text-8xl'>Preencha o formulário</h1>
                    <p className='text-primary text-xl tv:text-4xl'>Insira seus dados e envie o formulário para criar sua conta agora mesmo!</p>
                </div>
                
                
                <form onSubmit={handleSubmit(onSubmit)} className=' px-4 toten:px-20 desktop:px-80 flex flex-col w-full flex-1 gap-4 desktop:justify-between
                mt-4 items-center'>
                
                        <input className={`  ${errors.nome ? 'border-red-600 border-4 placeholder:text-red-400': '' } form-input`} 
                        placeholder={errors.nome? errors.nome.message: 'Nome'} {...register('nome')} />
                        
                        <input className={`${errors.email ? 'border-red-600 border-4 placeholder:text-red-400 ': '' }  form-input`}  placeholder={errors.email? errors.email.message: 'Email'}   {...register('email')}/>
                        <InputMask className={`${errors.cpf ? 'border-red-600 border-4 placeholder:text-red-400 ': '' } form-input `} placeholder={errors.cpf? errors.cpf.message: 'CPF'} mask="999.999.999-99" inputMode='numeric' {...register('cpf')}/>
                        <InputMask className={`${errors.whatsapp ? 'border-red-600 border-4 placeholder:text-red-400 ': '' } form-input`} placeholder={errors.whatsapp? errors.whatsapp.message: 'WhatsApp'} inputMode='numeric' mask="(99)99999-9999"  {...register('whatsapp')}/>
                                
                        
                    <input className='btn-blue place-self-center text-4xl mt-6' type='submit' value='ENVIAR'/>
                </form>
            </div>
                <div className='absolute bottom-0 w-full '>
                    <Footer style="tablet:hidden " />
                </div>
   
           
    
            
         
     
        </div>
    )
}