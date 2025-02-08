import "./App.css";
import React, { useState, useRef } from "react";
import Asking from "./Components/Asking";
import Accepted from "./Components/Accepted";
import emailjs from "@emailjs/browser";
function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [rejectionIndex, setRejectionIndex] = useState(0);
  const [noState, setNoState] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState({
    width: 100,
    height: 70,
  });

  const appContainer = useRef();
  const handleAccept = (e) => {
    e.preventDefault();
    setAccepted(true);
    console.log(process.env.REACT_APP_EMAILPUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        appContainer.current,
        {
          publicKey: process.env.REACT_APP_EMAILPUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const hanldeReject = (e) => {
    e.preventDefault();
    const rejectionTexts = [
      "Haina Hola",
      "Feri Sochana",
      "Sachi hora",
      "Testo na bhanana",
      "Yo hawa ko kasam",
    ];
    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === rejectionIndex);

    setYesButtonSize((prevState) => ({
      ...prevState,
      width: prevState.width + 20,
      height: prevState.height + 20,
    }));
    setNoState(true);
    setRejectionIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };
  return (
    <form ref={appContainer} className="app">
      {!accepted && (
        <Asking
          currentState={noState}
          handleAccept={handleAccept}
          handleReject={hanldeReject}
          noButtonText={noButtonText}
          yesButtonSize={yesButtonSize}
        />
      )}
      {accepted && <Accepted />}
    </form>
  );
}

export default App;
