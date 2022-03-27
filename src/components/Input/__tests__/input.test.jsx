import React from "react";
import Input from "..";

describe("Input", () => {
  describe("render()", () => {
    test("renders Input component with placeholder", () => {
      // snapshot
    });

    it("renders Input component with value", () => {
      //snapshot
      // make sure of value attribute has the same entered value
    });

    it("when user right in input element, it trigger change in Input Component", () => {
      // simulate change event
      // assert on onchange function that is called with same value triggered in simulation
    });

    it("renders Input component with hint message", () => {
      // snapshot
      // message rendered in the right place
    });

    it("renders Input component with error and hide hint message", () => {
      // snapshot
      // error rendered in the right place
    });

    it("renders disabled input", () => {
      // snapshot
      // has disabled attribute
    });
  });
});
