import "./Board.css";
import React, { useState } from "react";
import { BoardRow } from "../BoardRow/BoardRow";

const ROWS = 6 as const;
const LETTERS = 5 as const;

type AlertProps = {
  message: string;
};
export const Alert = ({ message }: AlertProps) => {
  if (message) {
    return <div role="alert">{message}</div>;
  }
  return null;
};

export const Board = () => {
  const [error, setError] = useState("");
  const [guess, setGuess] = useState("");
  const handleChange = (e: React.ChangeEvent) => {
    console.log("handleChange", e);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.length < 5) {
      setError("word is too short");
    } else {
      setError("");
    }
    console.log("handleSubmit yo");
  };
  return (
    <>
      <Alert message={error} />
      <form name="board" title="guesses" onSubmit={handleSubmit}>
        {[...Array(ROWS)].map((_, index) => (
          <BoardRow
            guess={guess}
            rowNumber={index}
            key={`row${index}`}
            onGuessChange={handleChange}
          />
        ))}
        <input type="submit" />
      </form>
    </>
  );
};
