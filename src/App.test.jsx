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
        expect(screen.getByText("List Name")).toBeInTheDocument();
      },
      50,
    );
  });
});
