import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";
import userEvent from "@testing-library/user-event";

const correctGuess = "jeans";

const guesses = {
  guesses: ["fears", "chair"],
};

describe("board", () => {
  describe("new game", () => {
    test("it is an form element", () => {
      // ToDo: change this to Valid HTML and isAccessible from AxeCore
      const element = render(<Board />);
      expect(element.getByRole("form")).toBeInTheDocument();
    });
    test("it should be an empty 6 x 5 grid, with only the first row enabled", () => {
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
        Array.from(row.children).every((child, index) => {
          if (child instanceof HTMLInputElement) {
            expect(child.value).toBeFalsy();
            if (rowIndex === 0 && index === 0) {
              expect(child.value).toHaveFocus();
            }
          }
        });
      });
    });
  });
  describe("validating a guess", () => {
    it("shows an error, when the guess is too short", async () => {
      const user = userEvent.setup();
      render(<Board />);
      const rows = screen.getAllByRole("group");
      expect(rows[0].children[0].children[0]).toHaveFocus();
      expect(rows[0].children[0].children[0]).toBeInstanceOf(HTMLInputElement);
      await user.type(rows[0].children[0].children[0], "j");
      expect(rows[0].children[0].children[0]).toHaveValue("j");
      await user.tab();
      expect(rows[0].children[1].children[0]).toHaveFocus();
      await user.type(rows[0].children[1].children[0], "e");
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
      await user.keyboard("{Enter}");
      //
      expect(screen.getByText("word is too short")).toBeInTheDocument();
      expect(screen.getByRole("alert", {})).toBeInTheDocument();
      // Not done. but line 56 is stopping point
      // expect
      // console.log("rows", rows[0].children[0].children[0].value);
    });
    // it('validates the word a word on')
    // input a letter
    // tab, input a letter
    // hit enter
    // validate guess
    // });
    // describe('opening with a game already in progress', () {
  });
  // It should only have one row enabled
  // Given an input of guesses, it should display the board like x
  // correct letters in wrong spot
  //correct letters in correct spot
  // It should confirm when the guess is correct!
});
