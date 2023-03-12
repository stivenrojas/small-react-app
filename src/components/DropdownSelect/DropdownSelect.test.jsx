import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownSelect from "./DropdownSelect.jsx";
import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";

jest.mock("../../services/newsPaperService");

describe("DropdownSelect tests", () => {
    const filteredList = [
        {
            listName: "Combined Print and E-Book Fiction",
            title: "THE ADVENTURES OF AMINA AL-SIRAFI",
            description: "A former pirate on the Indian Ocean is asked to retrieve her comrade’s kidnapped daughter",
            author: "Shannon Chakraborty",
            rank: 8,
            publisher: "Harper Voyager",
            amazon_product_url: "https://www.amazon.com/dp/0062963503?tag=NYTBSREV-20",
        },
        {
            listName: "Hardcover Fiction",
            title: "STORM WATCH",
            description: "The 23rd book in the Joe Pickett series. Joe and Nate might be on opposite sides for the first time.",
            author: "C.J. Box",
            rank: 1,
            publisher: "Putnam",
            amazon_product_url: "https://www.amazon.com/dp/0593331303?tag=NYTBSREV-20",
        }
  ];

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