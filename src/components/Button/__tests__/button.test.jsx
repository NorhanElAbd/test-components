import React from "react";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  describe("render buttons", () => {
    test("render a default button", () => {
      const tree = render(
        <Button onClick={() => {}} text="sample text" testId="main-button" />
      );
      expect(tree).toMatchSnapshot();
    });
    test("render a disabled button", () => {
      const tree = render(
        <Button text="" onClick={() => {}} disabled testId="main-button" />
      );
      const disabledButton = screen.getByTestId("main-button");
      expect(disabledButton).toHaveAttribute("disabled");
      expect(tree).toMatchSnapshot();
    });
  });
  test("button actions", () => {
    const mockClickAction = jest.fn();
    render(<Button text="" onClick={mockClickAction} testId="main-button" />);
    const mainButton = screen.getByTestId("main-button");
    fireEvent.click(mainButton);
    expect(mockClickAction).toHaveBeenCalled();
  });
});
