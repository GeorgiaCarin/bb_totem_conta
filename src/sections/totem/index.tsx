"use client";

import { useState } from "react";
import { Background } from "./step_one/index";
import { StepTwo } from "./step_two/index";
import { StepThree } from "./step_three";


export const Totem = () => {
  const [Section, setSection] = useState<number>(1);



  if (Section === 1) {
    return <Background setSection={setSection} />;
  }

  if (Section === 2) {
 
    return <StepTwo setSection={setSection} section={Section} />;

  } if(Section == 3) {
  
    return <StepThree setSection={setSection} section={Section} />
    
  }

  setSection(1)

};