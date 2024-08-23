"use client";

import { useState,useEffect } from "react";
import { Background } from "./step_one/index";
import { StepTwo } from "./step_two/index";
import { StepThree } from "./step_three";
import { StepFour } from "./step_four";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../index.css';

export const TotemVertical = () => {
  const [section, setSection] = useState<number>(2);

  const requestFullscreen = () => {
    const elem = document.documentElement;
    elem.requestFullscreen();
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } 
  };

  useEffect(() => {
    requestFullscreen();
  }, []);
  const renderStep = () => {
    

    switch (section) {
      case 1:
        return <Background setSection={setSection} />;
      case 2:
        return <StepTwo setSection={setSection} />;
      case 3:
        return <StepThree setSection={setSection} />;
      case 4:
        return <StepFour setSection={setSection} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full">
      <TransitionGroup component={null}>
        <CSSTransition
          key={section}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="h-full">{renderStep()}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
