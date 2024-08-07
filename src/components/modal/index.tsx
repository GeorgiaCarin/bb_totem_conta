import { Backdrop, Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
  text: string;
};

export const ModalDefault = ({ open, handleClose, title, text }: Props) => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
    sx={{
      border: "1px solid red",
    }}
  >
    <Fade in={open}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "400px",
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="transition-modal-title" variant="h4" align="center">
          {title}
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }} align="center">
          {text}
        </Typography>

        <Grid container justifyContent="center" mt={1}>
          <Button variant="contained" color="success" sx={{ width: "50%", padding: "10px" }} onClick={handleClose}>
            Ok, entendi.
          </Button>
        </Grid>
      </Box>
    </Fade>
  </Modal>
)
