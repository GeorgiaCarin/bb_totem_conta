import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import { typographyClasses } from '@mui/joy/Typography';
import AttachMoney from '@mui/icons-material/AttachMoney'
import Dashboard from '@mui/icons-material/Dashboard'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import { useEffect, useState } from 'react';

type props ={
  section: number
}


export const NavBar = ({section}: props) => {

  const [activeStep, setActiveStep] = useState<number>(section);

  useEffect( () => {
    
    setActiveStep(section)

  },[section])
  
  // setActiveStep(section)
  return (
    <Stepper
      
      orientation="horizontal"
      sx={{
        width: '100%',
    
      
        '--Stepper-horizontalGap': '4rem',
        '--StepIndicator-size': '4rem',
        '--StepIndicator-radios': '0rem',
        '--Step-gap': 'rem',
        '--joy-palette-success-solidBg': '#2A66F2',
        [`& .${stepIndicatorClasses.root}`]: {
          borderRadius: '20px'

        },
        
        
        [`& .${stepClasses.completed}`]: {
          '&::after': { bgcolor: '' ,borderRadius: '0' },
          '&::before': { color: '#2A66F2', borderRadius: '0'},
         
          
        },
        [`& .${stepClasses.active}`]: {
          '&::after': { bgcolor: '#FCFC30' },
          '&::before': { color: '#2A66F2' },
          [`& .${stepIndicatorClasses.root}`]: {
            border: '4px solid',
            borderColor: '#2A66F2',
            bgcolor: '#FCFC30',
            color: '#2A66F2',
            boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,

          },
        },
        [`& .${stepClasses.disabled} `]: {
          '&::after': { bgcolor: '#FCFC30' },
          '&::before': { color: '#FCFC30' },
          [`& .${stepIndicatorClasses.root}`]: {
            bgcolor: '#FCFC30',
            color: '#2A66F2',

  
          },
          

        },
        [`& .${typographyClasses['title-sm']}`]: {
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '10px',
       
        },

        

      }}
    >
      <Step
      completed={activeStep > 1} active={activeStep==1} disabled={activeStep<1}
        indicator={
          <StepIndicator variant="solid" color="success">
            <Dashboard   />
          </StepIndicator>
        }
      >
        
      </Step>
      <Step
    
      completed={activeStep > 2} active={activeStep==2} disabled={activeStep<2}
        indicator={
          <StepIndicator variant="solid" color="success">
            <AttachMoney />
          </StepIndicator>
        }
      >
        
      </Step>
      <Step

        completed={activeStep > 3} active={activeStep==3} disabled={activeStep<3}   
        indicator={
          <StepIndicator variant="solid" color="success">
            <AppRegistrationRoundedIcon />

          </StepIndicator>
        }
      >
       
      </Step>
      
    </Stepper>
  );
}