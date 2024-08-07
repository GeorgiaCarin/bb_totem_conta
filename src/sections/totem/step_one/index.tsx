"use client";
import '../../../index.css'

import { MediaBackground } from '../../../screens/media-background';
type props = {
  setSection: React.Dispatch<React.SetStateAction<number>>
}

export const Background = ({setSection}:props) => {
  return (
    <>
      
      <MediaBackground setSection={setSection}/>
        
      </>
  )

  
}
