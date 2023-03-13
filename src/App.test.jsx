import "@testing-library/jest-dom";
import React from "react";
import {
  render, screen,
} from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  beforeEach(() => {
    // Mock necessary libraries and functions.
    
  });

  it("renders App", () => {
    render(<App />);
    setTimeout(
      () => {
        expect(screen.getByText("Book Library")).toBeInTheDocument();
        expect(screen.getByTestId("select-test-id")).toBeInTheDocument();
        expect(screen.getByTestId("paper-test-id")).toBeInTheDocument();
      },
      50,
    );
  });
});
