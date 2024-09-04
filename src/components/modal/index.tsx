import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  p: 4,
};
interface props {
  handleClick: () => void;
}
export default function BasicModal({handleClick}:props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Permitir tela cheia?
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={handleClick}>Permitir</Button>
            <Button variant='outlined' onClick={handleClose}>Não Permitir</Button>        

          </Stack>

          </Box>
      </Modal>
    </div>
  );
}
