"use client";

import { useState, useEffect, useRef } from "react";
import { Background } from "./step_one/index";
import { StepTwo } from "./step_two/index";
import { StepThree } from "./step_three";
import { StepFour } from "./step_four";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../index.css';
import BasicModal from "../../components/modal";

export const TotemVertical = () => {
  const [section, setSection] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Tentar entrar em tela cheia após o usuário interagir
  const enterFullscreen = () => {
      if (containerRef.current) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen().catch(err => {
            console.log('Erro ao entrar em tela cheia', err);
          });
        }
      }
    };


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
    <div ref={containerRef} className="w-full h-full">
      <BasicModal handleClick={enterFullscreen} />
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
