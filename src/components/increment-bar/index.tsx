import Box from "@mui/joy/Box"
import { Slider } from "@mui/material"

type props = {
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export const IncrementBar = ({value,setValue}:props) => {
    const handleChange = (event: Event,newValue:number | number[] ) => {
        setValue(newValue as number)
    }
    return (
        <div className='flex flex-col flex-1 w-full justify-center items-center text-center gap-8 '>
                    
        <input className='bg-black/65 h-20 w-2/4 text-5xl pl-4 text-bb-lyellow rounded-3xl border-b-4 border-bb-blue mb-4' value={value} />
        <Box sx={{width:500}} >
            <Slider
            sx={{
                
                height:50,
                color: '#5A8BFF',
                borderRadius: '20px',
                '& .MuiSlider-thumb': {
                    color: '#2A66F2',
                    borderRadius: '20px',
                    width: 50,
                    height: 50,
                    
                    
                },
            }}
            
            value={value}
            min={10000}
            max={60000}
            onChange={handleChange}
            step={100}

            />
        </Box>
        
    </div>
    )
}