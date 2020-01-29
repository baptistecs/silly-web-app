import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Input", () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Start typing/);
  expect(inputElement).toBeInTheDocument();
});

test("renders MessageBox", () => {
  const { getByText } = render(<App />);
  const messageBoxElement = getByText(/Last key pressed was:/);
  expect(messageBoxElement).toBeInTheDocument();
});
