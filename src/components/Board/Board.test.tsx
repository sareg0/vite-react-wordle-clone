import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

describe("board", () => {
  describe("new game", () => {
    test("it is an form element", () => {
      const element = render(<Board />);
      expect(element.getByRole("form")).toBeInTheDocument();
    });
    test("it should be a 6 x 5 grid", () => {
      const element = render(<Board />);
      const rows = element.getAllByRole("group");
      expect(rows).toHaveLength(6);
      rows.every((row) => {
        expect(row.children).toHaveLength(5);
        Array.from(row.children).every((child) => {
          if (child instanceof HTMLInputElement) {
            expect(child.value).toBeFalsy();
          }
        });
      });
    });
  });
});
