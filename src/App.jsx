import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && <Steps />}
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    if (step < messages.length) setStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <Step step={step}>1</Step>
        <Step step={step}>2</Step>
        <Step step={step}>3</Step>
      </div>
      <StepMessage>
        Step {step}: {messages[step - 1]}
      </StepMessage>

      <div className="buttons">
        <button className="previous" onClick={handlePrevStep}>
          Previous
        </button>
        <button className="next" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

function Step({ step, children }) {
  return (
    <div className={`step-${children} ${step >= children ? "active" : ""}`}>
      {children}
    </div>
  );
}

function StepMessage({ children }) {
  return <p className="message">{children}</p>;
}
