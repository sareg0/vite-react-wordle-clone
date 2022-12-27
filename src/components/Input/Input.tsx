// import './Input.css'

import { ChangeEventHandler } from "react";

export interface Props {
  letter: string;
  index: number;
  row: number;
  hasFocus?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ letter, index, row, hasFocus, onChange }: Props) => {
  return (
    <>
      <label>
        {index}
        {row}
        <input
          onChange={onChange}
          maxLength={1}
          autoFocus={hasFocus}
          id={`${letter}${index}${row}`}
          type="text"
        />
      </label>
    </>
  );
};
