import React from "react";
import { useState, useEffect } from "react";

import { Container } from "./styles";
import { LapList } from "../lap-list";
import { TimerDisplay } from "../timer-display";
import { TimerControls } from "../timer-controls";

export function Timer() {
  const [millisecond, setMillisecond] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + (Math.floor(millisecond / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(millisecond / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(millisecond / 10) % 100)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMillisecond((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stoptTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stoptTimer(interval);
    }

    return () => stoptTimer(interval);
  }, [timerOn]);

  return (
    <Container>
      <TimerDisplay time={formatTime()} />
      <TimerControls
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
      />
      <LapList />
    </Container>
  );
}
