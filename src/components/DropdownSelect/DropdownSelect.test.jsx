import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownSelect from "./DropdownSelect.jsx";

jest.mock("../../services/newsPaperService");

describe("DropdownSelect tests", () => {
  it("Renders with option 'Combined Print and E-Book Fiction' selected", async () => {
    const listNameFilter = "Combined Print and E-Book Fiction";
    const options = [
        "Combined Print and E-Book Fiction",
        "Hardcover Fiction",
        "Hardcover Nonfiction",
        "Trade Fiction Paperback",
        "Mass Market Paperback",
        "Paperback Nonfiction",
    ];
    const dropdownComponent = (
        <DropdownSelect
          fieldName="List Name"
          fieldValue={listNameFilter}
          handleDropdownChange={()=>{}}
          dropDownOptions={options}
          defaultValue="All"
          className="mt-4 mb-4"
        />
    );
    render(dropdownComponent);
    expect(screen.getByText("Combined Print and E-Book Fiction")).toBeInTheDocument("Combined Print and E-Book Fiction");
    
  });
});