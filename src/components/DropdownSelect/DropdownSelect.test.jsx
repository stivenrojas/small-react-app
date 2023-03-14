import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DropdownSelect from "./DropdownSelect.jsx";
import newsPaperService from "../../services/newsPaperService";

jest.mock("../../services/newsPaperService");

describe("DropdownSelect tests", () => {
  it.only("Renders with option 'hardcover-fiction' selected", async () => {
    const listNameFilter = "hardcover-fiction";
    const options = [
        {
          displayLabel: "Combined Print and E-Book Fiction",
          value: "combined-print-and-e-book-fiction"
        },
        {
          displayLabel: "Hardcover Fiction",
          value: "hardcover-fiction"
        },
        {
          displayLabel: "Hardcover Nonfiction",
          value: "hardcover-nonfiction"
        },
        {
          displayLabel: "Combined Print and E-Book Fiction",
          value: "combined-print-and-e-book-fiction"
        },
    ];
    const dropdownComponent = (
        <DropdownSelect
          fieldName="List Name"
          fieldValue={listNameFilter}
          handleDropdownChange={()=>{}}
          dropDownOptions={options}
          defaultValue="All"
          className="mt-4 mb-4"
          loading={false}
        />
    );
    render(dropdownComponent);
    expect(screen.getByText("Hardcover Fiction")).toBeInTheDocument();
    
    
  });
});