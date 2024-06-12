import React from "react";

import { Container } from "./styles";

export function TimerControls({ onStart, onStop }) {
  return (
    <Container>
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Parar</button>
    </Container>
  );
}
