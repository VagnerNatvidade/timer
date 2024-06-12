import React from "react";

import { Container } from "./styles";

export function TimerDisplay({ time }) {
  return (
    <Container>
      <h1>{time}</h1>
    </Container>
  );
}
