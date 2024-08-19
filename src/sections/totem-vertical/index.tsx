"use client";

import { useState } from "react";
import { Background } from "./step_one/index";
import { StepTwo } from "./step_two/index";
import { StepThree } from "./step_three";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../index.css'
import { StepFour } from "./step_four";
export const TotemVertical = () => {
  const [section, setSection] = useState<number>(1

  );
  const Stepper = () => {

    if (section === 1) return <Background setSection={setSection} />;

    if (section === 2) return <StepTwo setSection={setSection} />;

    if(section == 3) return <StepThree setSection={setSection} />
    
    if(section == 4) return <StepFour setSection={setSection} />

  }


  return (
    <div className=" w-full h-full">

    <TransitionGroup className='h-full '>
      <CSSTransition key={section} timeout={300} classNames="fade ">
        {Stepper()}
      </CSSTransition>
    </TransitionGroup>
    </div>
  );

};