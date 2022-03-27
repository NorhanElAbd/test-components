import React from "react";
import { render } from "@testing-library/react";
import Users from "../Users";

jest.mock("../Users/useGetUsers", () => ({
  useGetUsers: () => ({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  }),
}));

describe("render different types and sizes of buttons", () => {
  test("render a default button", () => {
    const tree = render(<Users />);
    expect(tree).toMatchSnapshot();
  });
});
