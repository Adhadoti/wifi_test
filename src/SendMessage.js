import React, { useEffect, useState } from "react";
export default function SendMessage() {
    const [seconds, setSeconds] = useState("Hello");
    const [second1, setSeconds1] = useState(1);
    const [sec, setSec] = useState(1);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds("Hello\n");
        setSeconds1(second1 + 1)
      }, 5000);
      return () => clearInterval(timer);});
      
  
    return (
      <div className="app">
        <h1>Printing {seconds} version: {second1}</h1>
      </div>
    );
  }