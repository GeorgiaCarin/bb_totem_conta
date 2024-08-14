
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { createTheme, Theme } from '@mui/material/styles';


export const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#2A66F2',
            '--TextField-brandBorderHoverColor': '#2A66F2',
            '--TextField-brandBorderFocusedColor': '#2A66F2',
            '& label': {
              color: '#2A66F2',
              fontSize: '24px'


              
              
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: ' #2A66F2',
            borderWidth: '4px',
            borderRadius: '20px'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: ' #5A8BFF',
              borderWidth: '4px',
              borderRadius: '20px'
              
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: ' #2A66F2',
              borderWidth: '4px',
              borderRadius: '20px',
              fontSize: "22px",
              margin: ''
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontSize: '24px', // Ajuste o tamanho da fonte aqui
          },
          adornedStart: {

          }
        },
      },

      
      
    },
  });
