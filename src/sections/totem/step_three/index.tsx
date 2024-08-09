
import { Menu } from '../../../components/menu'

import '../../../index.css'

import { Controller, useForm } from 'react-hook-form'
import { Box, TextField } from '@mui/material'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {  ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import {  customTheme } from '../../../components/input'



type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
    section: number
}
const dataSchema = z.object({
        nome: z.string(),
        email: z.string(),
        cpf: z.string(),
        whatsapp: z.string()

    }) 
export const StepThree = ({setSection, section}:props) => {

    const outerTheme = useTheme(); 
    type FormData = z.infer<typeof dataSchema>;

    const {register,control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(dataSchema)
    })
    const onSubmit = (data:FormData) => console.log(data.cpf) 

    return (
        <div className='flex flex-col bg-dados bg-cover w-screen h-screen gap-4 p-16'>
    
            <h1 className=' text-bb-blue uppercase text-6xl font-semibold text-center mt-8' >Informe seus dados</h1>
            <div className=' flex flex-col flex-1 gap-8 mt-8'>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col flex-1 gap-8 mt-4'>
            
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>

                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField label="Nome" {...register("nome")}  />
                    </ThemeProvider>
                </div>
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField label="Email" {...register("email")} />
                    </ThemeProvider>
                </div>
                <div className='flex gap-4 flex-col lg:flex-row '>
                    <div className={`flex flex-col flex-1 uppercase gap-0 text-bb-blue font-medium text-xl`}>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField label="CPF" {...register("cpf")} />
                        </ThemeProvider>    
                    </div>
                    <div className={`flex flex-col flex-1 gap-0 text-bb-blue font-medium text-xl`}>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField label="whatsapp" {...register("whatsapp")} />
                        </ThemeProvider>    
                        
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