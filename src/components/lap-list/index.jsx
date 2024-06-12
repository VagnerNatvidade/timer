import React from "react";

import { Container } from "./styles";

export function LapList({ laps }) {
  return (
    <Container>
      <h3>Voltas</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Volta {index + 1} - {lap}
          </li>
        ))}
      </ul>
    </Container>
  );
}
