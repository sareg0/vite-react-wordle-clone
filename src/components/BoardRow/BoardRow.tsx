import React, { useState } from "react";
import { Input } from "../Input/Input";

export const BoardRow = ({
  guess = "sam",
  rowNumber,
  letters = 5,
  onGuessChange,
}: {
  guess: string;
  rowNumber: number;
  letters?: number;
  onGuessChange: Function;
}) => {
  const isDisabled = rowNumber !== 0;
  const [guessArray, setGuessArray] = useState(
    [...Array(letters)].map((element, index) => (element = guess[index] || "-"))
  );
  const handleGuesschange = (index: number, value: string) => {
    console.log("handleGuesschange", index, value);
    const nextGuess = guessArray.map((item, i) => (i === index ? value : item));
    setGuessArray(nextGuess);
  };
  return (
    <fieldset disabled={isDisabled}>
      {guessArray.map((_, index) => (
        <Input
          onChange={(e) => handleGuesschange(index, e.target.value)}
          letter={guessArray[index] || ""}
          index={index}
          row={rowNumber}
          key={`${rowNumber}${index}`}
          hasFocus={rowNumber === 0 && index === 0}
        />
      ))}
    </fieldset>
  );
};
