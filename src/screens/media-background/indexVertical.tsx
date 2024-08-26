import React, { useEffect, useRef } from 'react';
import beneficio from '../../assets/BENEFICIO1-sem-audio.mp4';
import { Footer } from '../../components/footer';

type props = {
  setSection: React.Dispatch<React.SetStateAction<number>>;
};

export const MediaBackground = ({ setSection }: props) => {

  const videoRef = useRef<HTMLVideoElement>(null);


  return (
    <div onClick={() => setSection((e) => e + 1)} className=' bg-bb-yellow flex justify-center items-center'>

      <video
        ref={videoRef}
        
        className="h-screen object-cover object-center z-0 opacity-100 ease-in-out"
        autoPlay
        muted
        src={beneficio}
        loop
      />
    </div>
  );
};
