import React from "react";

import { Container } from "./styles";
import { LapList } from "../lap-list";
import { TimerDisplay } from "../timer-display";
import { TimerControls } from "../timer-controls";

export function Timer() {
  return (
    <Container>
      <TimerDisplay />
      <TimerControls />
      <LapList />
    </Container>
  );
}
