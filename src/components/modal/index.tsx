import { Fade, Modal } from "@mui/material";

import qrcode from '../../assets/qrcode.png'
import { Button } from "../button";
type Props = {
  open: boolean;
  setSection: React.Dispatch<React.SetStateAction<number>>

};

export const ModalDefault = ({ open,setSection }: Props) => (
  <Modal

    open={open}

    closeAfterTransition

    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
    sx={{
      border: "1px solid red",
      width: '1080',
      height: '1920'
    }}
  >
    <Fade in={open}>
      <div className=" flex flex-col items-center w-[1080px] h-[1920px] bg-qrcode bg-cover gap-16 text-center ">
    
                <div className="mt-24 items-center">
                    <h1 className='title-primary text-bb-yellow'>Parabéns</h1>
                    <p className='text-primary text-white leading-[40px]'>Agora aponte a câmera do seu celular para op QRCODE
                    para iniciar a abertura de sua conta no Whatsapp.</p>
                </div>
                    <img className="w-[420px] border-[20px]" src={qrcode} alt="" />
                    <button onClick={() =>setSection(1)} className="btn-ylw">CONCLUIR</button>
      </div>
    </Fade>
  </Modal>
)
