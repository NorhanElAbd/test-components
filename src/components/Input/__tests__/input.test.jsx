import React from "react";
import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import Input from "..";

describe("Input", () => {
  describe("render()", () => {
    test("renders Input component with placeholder", () => {
      // snapshot

      const mockChangeAction = jest.fn();
      const tree = render(
        <Input
          onChange={mockChangeAction}
          placeholder="text"
          testId="main-input"
        />
      );
      const input = screen.getByTestId("main-input");
      expect(input).toHaveAttribute("placeholder");
      expect(tree).toMatchSnapshot();
    });

    it("renders Input component with value", () => {
      //snapshot
      // make sure of value attribute has the same entered value

      const tree = render(<Input value="text" testId="main-input" />);
      const input = screen.getByTestId("main-input");
      expect(input).toHaveAttribute("value");
      expect(tree).toMatchSnapshot();
    });

    it("when user right in input element, it trigger change in Input Component", () => {
      // simulate change event
      // assert on onchange function that is called with same value triggered in simulation

      render(<Input testId="main-input" />);
      const input = screen.getByTestId("main-input");
      fireEvent.change(input, { target: { value: "amr" } });
      expect(input.value).toBe("amr");
    });

    it("renders Input component with hint message", () => {
      // snapshot
      // message rendered in the right place

      const tree = render(<Input hintMessage="text" testId="main-input" />);
      const input = screen.getByTestId("main-input-hint");
      expect(input).toHaveTextContent("text");
      expect(tree).toMatchSnapshot();
    });

    it("renders Input component with error and hide hint message", () => {
      // snapshot
      // error rendered in the right place

      const tree = render(<Input errorMessage="error" testId="main-input" />);
      const input = screen.getByTestId("main-input-error");
      expect(input).toHaveTextContent("error");
      expect(tree).toMatchSnapshot();
    });

    it("renders disabled input", () => {
      // snapshot
      // has disabled attribute

      const utils = render(<Input testId="main-input" disabled />);
      const input = screen.getByTestId("main-input");
      expect(input).toHaveAttribute("disabled");
      expect(utils).toMatchSnapshot();
    });
  });
});
