import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import StickyHeaderTable from "./StickyHeaderTable.jsx";
import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";

jest.mock("../../services/newsPaperService");

describe("StickyHeadTable tests", () => {

  it("Renders with correct data", async () => {
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
    const tableCellListName1 = screen.getByTestId("cell-test-id-0-0");
    const tableCelltitle1 = screen.getByTestId("cell-test-id-0-1");
    const tableCellListName2 = screen.getByTestId("cell-test-id-1-0");
    const tableCelltitle2 = screen.getByTestId("cell-test-id-1-1");

    expect(tableCellListName1.innerHTML).toBe("Combined Print and E-Book Fiction");
    expect(tableCelltitle1.innerHTML).toBe("THE ADVENTURES OF AMINA AL-SIRAFI");
    expect(tableCellListName2.innerHTML).toBe("Hardcover Fiction");
    expect(tableCelltitle2.innerHTML).toBe("STORM WATCH");
  });
});