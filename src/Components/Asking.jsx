import React from 'react'
import Willyoube from './Willyoube';
import Pleasebemy from './Pleasebemy';
import "../App.css"
const Asking = ({ currentState, handleAccept, handleReject, noButtonText, yesButtonSize }) => {
    return <div className='asking-container'>
        {currentState ? <Pleasebemy /> :
            <Willyoube />
        }
        <div className="buttonContainer">
            <button className="yesButton button" style={{ width: `${yesButtonSize.width + "px"}`, height: `${yesButtonSize.height + "px"}` }} onClick={handleAccept}>💘Yes</button>
            <button className="noButton button" onClick={handleReject}>💔{noButtonText}</button>
        </div>
    </div>
}

export default Asking;