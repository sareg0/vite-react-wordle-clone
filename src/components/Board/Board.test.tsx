import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

const correctGuess = "jeans";

const guesses = {
  guesses: ["fears", "chair"],
};

describe("board", () => {
  describe("new game", () => {
    test("it is an form element", () => {
      const element = render(<Board />);
      expect(element.getByRole("form")).toBeInTheDocument();
    });
    test("it should be an empty 6 x 5 grid", () => {
      const element = render(<Board />);

      const rows = element.getAllByRole("group");

      expect(rows).toHaveLength(6);
      rows.forEach((row, rowIndex) => {
        expect(row.children).toHaveLength(5);
        if (rowIndex !== 0) {
          expect(row).toBeDisabled();
        } else {
          expect(row).toBeEnabled();
        }
        Array.from(row.children).every((child) => {
          if (child instanceof HTMLInputElement) {
            expect(child.value).toBeFalsy();
          }
        });
      });
    });
  });
  // describe("validating a guess", () => {
  // 	it("shows an error, when the guess is too short", () => {
  // 		const board = render(<Board />);
  // 		board.getByRole()
  // 	});

  // it('validates the word a word on')
  // input a letter
  // tab, input a letter
  // hit enter
  // validate guess
  // });
  // describe('opening with a game already in progress', () {

  // })
  // It should only have one row enabled
  // Given an input of guesses, it should display the board like x
  // correct letters in wrong spot
  //correct letters in correct spot
  // It should confirm when the guess is correct!
});
