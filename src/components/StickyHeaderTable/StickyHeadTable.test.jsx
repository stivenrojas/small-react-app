import "@testing-library/jest-dom";
import React from "react";
import { render, screen, container } from "@testing-library/react";
import StickyHeaderTable from "./StickyHeaderTable.jsx";
import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";
import newsPaperService from "../../services/newsPaperService";

jest.mock("../../services/newsPaperService");

describe("StickyHeadTable tests", () => {

  it.only("Renders with correct data", async () => {
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
    const table = (
        <StickyHeaderTable
            columns={BEST_SELLERS_COLUMNS}
            dataArray={filteredList}
            className="mt-4"
      />
    );
    render(table);
    expect(screen.getByText("List Name")).toBeInTheDocument();
    
  });
});