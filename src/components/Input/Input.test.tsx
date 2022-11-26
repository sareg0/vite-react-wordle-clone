import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("input", () => {
  test("it is an input element", () => {
    render(<Input letter="" index={0} row={0} />);
    expect(screen.getByRole("textbox"));
  });
  test("it only allows on letter to be input", async () => {
    const user = userEvent.setup();
    render(<Input letter="" index={0} row={0} hasFocus />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveFocus();
    await user.keyboard("foo");
    expect(input).toHaveValue("f");
  });
  //   expect it to pass accessibility checks
});
