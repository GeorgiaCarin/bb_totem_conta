
import { Menu } from '../../../components/menu'

import '../../../index.css'

import { Controller, useForm } from 'react-hook-form'
import { Box, TextField } from '@mui/material'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {  ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import {  customTheme } from '../../../components/input'
import  InputMask from 'react-input-mask'
import { api_data } from '../../../api/contabb'

type props = {
    setSection : React.Dispatch<React.SetStateAction<number>>
    section: number
}
const dataSchema = z.object({
        nome: z.string(),
        email: z.string(),
        cpf: z.string().min(11,'CPF inválido').max(11),
        whatsapp: z.string().min()

    }) 
export const StepThree = ({setSection, section}:props) => {
    const [show,setShow] = useState<boolean>(false)
    const handleClick = () => {
        setShow(true)
    } 
    const outerTheme = useTheme(); 
    type FormData = z.infer<typeof dataSchema>;

    const {register,control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(dataSchema)
    })
    const onSubmit = async (data:FormData) => {
        console.log(data)
        try{
            const response = await api_data.post('/user',{
                cpf: data.cpf,
                email: data.email,
                name: data.nome,
                phone: data.whatsapp
    
            })
            console.log(response.status)

        }catch(err) {
            console.log('erro ao validar dados',err)
        }
    }

    return (
        <div className='flex flex-col bg-dados bg-cover w-screen h-screen gap-4 p-16'>
    
            <h1 className=' text-bb-blue uppercase text-6xl font-semibold text-center mt-8' >Informe seus dados</h1>
            <div className=' flex flex-col flex-1 gap-8 mt-8'>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col flex-1 gap-8 mt-4'>
            
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>

                    <Controller
                        name="nome"
                        control={control}
                        rules={{ required: "nome is required" }}
                        render={({ field }) => (
                            <>
                                <ThemeProvider theme={customTheme(outerTheme)}>

                                    <TextField
                                        {...field}                                
                                        type="text"
                                        label="Nome"
                                       
                                        error={!!errors.nome}
                                        fullWidth
                                        helperText={
                                            errors.nome
                                            ? errors.nome.message
                                            : ""
                                        }
                         
                                    />
                                </ThemeProvider>
                            
                            </>
                            
                            

                       
                        )}
                    />
                </div>
                <div className={`flex flex-col gap-0 text-bb-blue font-medium text-xl`}>
                <Controller
                        name="email"
                        control={control}
                        rules={{ required: "email is required", }}
                        render={({ field }) => (
                            <>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                             
                                    <TextField
                                        {...field}                                
                                        type="text"
                                        label="Email"
                                        
                                        error={!!errors.email}
                                        fullWidth
                                        helperText={
                                            errors.email
                                            ? errors.email.message
                                            : ""
                                        }
                                        
                                        
                                        />
                            
                                </ThemeProvider>
                            
                            </>
                            
                            
                       
                        )}
                    />
                </div>
                <div className='flex gap-4 flex-col lg:flex-row '>
                    <div className={`flex flex-col flex-1 uppercase gap-0 text-bb-blue font-medium text-xl`}>
                    <Controller
                                name="cpf"
                                control={control}
                                render={({ field }) => (
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <InputMask
                                            mask='999.999.999-99'
                                            {...field}
                                        >
                                            
                                                <TextField
                                         
                                                    label="CPF"
                                                    size="small"
                                                    error={!!errors.cpf}
                                                    fullWidth
                                                    helperText={errors.cpf?.message}
                                                />
                                           
                                        </InputMask>
                                    </ThemeProvider>
                                )}
                            />
                    </div>
                    <div className={`flex flex-col flex-1 gap-0 text-bb-blue font-medium text-xl`}>
                    <Controller
                        name="whatsapp"
                        control={control}
                        rules={{ required: "nome is required" }}
                        render={({ field }) => (
                            <>
                                <ThemeProvider theme={customTheme(outerTheme)}>

                                    <TextField
                                        {...field}                                
                                        type="text"
                                        label="WhatsApp"
                                       
                                        error={!!errors.email}
                                        fullWidth
                                        helperText={
                                            errors.whatsapp
                                            ? errors.whatsapp.message
                                            : ""
                                        }
                                 
                                        
                                    />
                                </ThemeProvider>
                            
                            </>
                            
                            
                       
                        )}
                    /> 
                        
                    </div>
                    
                    
                </div>
                <input className='btn-blue w-64 place-self-center'  type='submit' value='Validar Dados'/>
            </form>

            </div>
            <div >
                        

            </div>
     
        </div>
    )
}