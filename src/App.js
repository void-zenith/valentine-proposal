import "./App.css";
import React, { useState, useRef } from "react";
import Asking from "./Components/Asking";
import Accepted from "./Components/Accepted";
import emailjs from "@emailjs/browser";
function App() {
  //initial state of the viewing page
  const [accepted, setAccepted] = useState(false); // state that determines which page to view
  const [noButtonText, setNoButtonText] = useState("No"); // state of the label of the no button
  const [rejectionIndex, setRejectionIndex] = useState(0); // rejection index counting the number of times no was clicked
  const [noState, setNoState] = useState(false); //state that determines which gif to view

  //the initial size of the yes button
  const [yesButtonSize, setYesButtonSize] = useState({
    width: 100,
    height: 70,
  });

  // since i am using email js to send email if the proposal was accepted.
  // It needs to reference the form container
  const appContainer = useRef();

  // function to handle the accepted button
  const handleAccept = (e) => {
    e.preventDefault();
    setAccepted(true);
    // to send email once the proposal is accepted
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
  //function to handle rejection
  const hanldeReject = (e) => {
    e.preventDefault();
    // array of all the rejection texts
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
