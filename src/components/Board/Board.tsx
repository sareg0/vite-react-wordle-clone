import "./Board.css";
import React from "react";
import { Input } from "../Input/Input";

const ROWS = 6;
const LETTERS = 5;

const BoardRow = ({ rowNumber }: { rowNumber: number }) => {
  const isDisabled = rowNumber !== 0;
  return (
    <fieldset disabled={isDisabled}>
      {[...Array(LETTERS)].map((_, index) => (
        <Input
          letter=""
          index={index}
          row={rowNumber}
          key={`${index}${index}`}
        />
      ))}
    </fieldset>
  );
};

export const Board = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit yo");
  };
  return (
    <form name="board" title="guesses" onSubmit={handleSubmit}>
      {[...Array(ROWS)].map((_, index) => (
        <BoardRow rowNumber={index} key={`row${index}`} />
      ))}
      <input type="submit" />
    </form>
  );
};
