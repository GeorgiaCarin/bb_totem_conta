"use client";
import { useEffect, useRef } from 'react';
import '../../../index.css'

import { MediaBackground } from '../../../screens/media-background/indexVertical';
type props = {
  setSection: React.Dispatch<React.SetStateAction<number>>
}

export const Background = ({setSection}:props) => {


  return (
    <div className=' w-full toten:w-[1080px] toten:h-[1920px] bg-bb-yellow'>
      
      <MediaBackground setSection={setSection}/>
        
      </div>
  )

  
}
