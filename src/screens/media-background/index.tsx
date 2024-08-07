import React, { useEffect, useRef, useState } from 'react';

// import video1 from '../../assets/video5.mp4';
// import video2 from '../../assets/video4.mp4';
import video3 from '../../assets/video6.mp4';
//  import video4 from '../../assets/video9.mp4';

const media = [
  //{ type: 'video', src: video1 },
  //{ type: 'video', src: video2 },
  { type: 'video', src: video3 },
  // { type: 'video', src: video4 },
];

type props ={
  setSection: React.Dispatch<React.SetStateAction<number>>
}

export const MediaBackground = ({setSection}:props) => {
    const videoRefs = [useRef(null), useRef(null)];
    const imageRef = useRef(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(0);
  
    useEffect(() => {
      const handleMediaEnded = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
        setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % 2);
      };
  
      const currentMedia = media[currentMediaIndex];
      if (currentMedia.type === 'video') {
        const currentVideoRef = videoRefs[currentPlayer].current;
        currentVideoRef.addEventListener('ended', handleMediaEnded);
  
        return () => {
          currentVideoRef.removeEventListener('ended', handleMediaEnded);
        };
      } else {
        const timer = setTimeout(handleMediaEnded, 5000);
        return () => clearTimeout(timer);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMediaIndex, currentPlayer]);
  
    useEffect(() => {
      const currentMedia = media[currentMediaIndex];
      const currentVideoRef = videoRefs[currentPlayer].current;
      const nextVideoRef = videoRefs[(currentPlayer + 1) % 2].current;
  
      if (currentMedia.type === 'video') {
        currentVideoRef.src = currentMedia.src;
        currentVideoRef.style.opacity = 1;
        
        nextVideoRef.style.opacity = 0;
        imageRef.current.style.opacity = 0;

        const handleMetadataLoaded = () => {
          currentVideoRef.play().catch(error => {
            console.error("Error playing video:", error); 
          });
        };

        currentVideoRef.addEventListener('loadedmetadata', handleMetadataLoaded);

        return () => {
          currentVideoRef.removeEventListener('loadedmetadata', handleMetadataLoaded);
        };
      } else {
        imageRef.current.src = currentMedia.src;
        imageRef.current.style.opacity = 1;
  
        currentVideoRef.style.opacity = 0;
        nextVideoRef.style.opacity = 0;
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMediaIndex, currentPlayer]);

  return (
    <>
      <div className="absolute z-1 top-0 left-0 w-100 h-100"></div>
      <video ref={videoRefs[0]} className=" absolute z-0 w-100 h-100 object-cover opacity-100 ease-in-out" autoPlay muted />
      <video ref={videoRefs[1]} className="absolute z-0 w-100 h-100 object-cover opacity-100 ease-in-out" autoPlay muted />
      <img ref={imageRef} className="absolute z-0 w-100 h-100 object-cover opacity-100 ease-in-out" alt="Background" />
      <div onClick={() => setSection((e) => e + 1 )} className=" w-full h-full bg-black/75 p-4 blue-layout text-primary z-10 absolute flex flex-col justify-center items-center translate-x-50 ">
          <p className="text-bb-secundary text-xl md:text-5xl lg:text-6xl font-bold text-shadow">
            Conquiste seu sonho sem juros e sem entrada!
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold 
           ">
            Contrate aqui seu Consórcio BB e acelere seu sonho
          </p>
          <p className='text-xl md:text-3xl lg:text-4xl font-bold '>
            Aproveite condições especiais para pagamentos em até 100 meses
          </p>
          <p className='pt-6 text-xl md:text-4xl lg:text-5xl font-bold text-shadow'>
            Clique para saber mais
          </p>
      </div>
    </>
  );
};
