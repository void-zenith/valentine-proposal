import React, { useEffect, useRef } from 'react'
const PromiseContainer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        // Set up the red background
        ctx.fillStyle = "#CECFD2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let isDragging = false;

        const scratch = (x, y) => {
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 34, 0, Math.PI * 2, false); // Circular scratch
            ctx.fill();
        };

        const handleMouseDown = (e) => {
            isDragging = true;
            scratch(e.offsetX, e.offsetY);
        };

        const handleMouseMove = (e) => {
            if (isDragging) {
                scratch(e.offsetX, e.offsetY);
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        // Attach event listeners to the actual canvas, not ctx
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);

        // Cleanup event listeners on unmount
        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseUp);
        };
    }, []);

    return <div className='promise-maincontainer'>
        <h1>Sup & Zen</h1>
        <div className="scratch-container">
            <div className="scratch-content">
                Hey! Supashyee mero sanu mero janu. I had no idea that i would be this crazy in love with you bhanera. Since the day i say you, timro vibes timro personality timro everything just attracts me towards you. Long distance ma huda its been difficult but i know this won't last. tesaile in this promise day i promise you that i will keep you happy, love you always, respect you always and i promise you we will meet this year very soon. I love you sanu.
            </div>
            <canvas ref={canvasRef} id="scratch-card" width={500} height={5000}></canvas>
        </div>
    </div>
}

export default PromiseContainer;