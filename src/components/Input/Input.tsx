// import './Input.css'

export interface Props {
  letter: string;
  index: number;
  row: number;
  hasFocus?: boolean;
}

export const Input = ({ letter, index, row, hasFocus }: Props) => {
  return (
    <>
      <label>
        {index}
        {row}
        <input
          maxLength={1}
          autoFocus={hasFocus}
          id={`${letter}${index}${row}`}
          type="text"
        />
      </label>
    </>
  );
};
