import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BookLibrary from "./BookLibrary";
import newsPaperService from "../../services/newsPaperService";

jest.mock("../../services/newsPaperService");

describe("BookLibrary tests", () => {
    const listNamesMock = [
        {
            display_name: "Combined Print and E-Book Fiction",
            list_name_encoded: "combined-print-and-e-book-fiction",
        },
        {
            display_name: "Hardcover Nonfiction",
            list_name_encoded: "hardcover-nonfiction",
        },
        {
            display_name: "Hardcover Fiction",
            list_name_encoded: "hardcover-fiction",
        }
    ];

    const bestSellersMockData = {
        bestsellers_date: "2023-03-04",
        next_published_date: "",
        published_date: "2023-03-19",
        lists: [
            {
                list_id: 1,
                list_name: "Combined Print and E-Book Fiction",
                display_name: "Combined Print and E-Book Fiction",
                books: [
                    {
                        title: "STORM WATCH",
                        description: "The 23rd book in the Joe Pickett series. Joe and Nate might be on opposite sides for the first time.",
                        author: "C.J. Box",
                        rank: 1,
                        publisher: "Putnam",
                        amazon_product_url: "https://www.amazon.com/dp/0593331303?tag=NYTBSREV-20",
                    }
                ],
            },
            {
                list_id: 1,
                list_name: "Hardcover Fiction",
                display_name: "Hardcover Fiction",
                books: [
                    {
                        title: "THE ADVENTURES OF AMINA AL-SIRAFI",
                        description: "A former pirate on the Indian Ocean is asked to retrieve her comrade’s kidnapped daughter",
                        author: "Shannon Chakraborty",
                        rank: 8,
                        publisher: "Harper Voyager",
                        amazon_product_url: "https://www.amazon.com/dp/0062963503?tag=NYTBSREV-20",
                    }
                ],
            }
            
        ],
    }

    const bestSellersMockByListName = {
        bestsellers_date: "2023-03-04",
        results: [
            {
                list_id: 1,
                list_name: "Combined Print and E-Book Fiction",
                list_name_encoded: "combined-print-and-e-book-fiction",
                display_name: "Combined Print and E-Book Fiction",
                books: [
                    {
                        title: "STORM WATCH",
                        description: "The 23rd book in the Joe Pickett series. Joe and Nate might be on opposite sides for the first time.",
                        author: "C.J. Box",
                        rank: 1,
                        publisher: "Putnam",
                        amazon_product_url: "https://www.amazon.com/dp/0593331303?tag=NYTBSREV-20",
                    },
                    {
                        title: "THE ADVENTURES OF AMINA AL-SIRAFI",
                        description: "A former pirate on the Indian Ocean is asked to retrieve her comrade’s kidnapped daughter",
                        author: "Shannon Chakraborty",
                        rank: 8,
                        publisher: "Harper Voyager",
                        amazon_product_url: "https://www.amazon.com/dp/0062963503?tag=NYTBSREV-20",
                    }
                ],
            },
        ],
    }

    beforeEach(() => {
        newsPaperService.getAllBestSellersListNames.mockReturnValue(
            listNamesMock,
        );
        newsPaperService.getAllBestSellersBooks.mockReturnValue(
            bestSellersMockData,
        );
        newsPaperService.getBestSellersBooksByListName.mockReturnValue(
            bestSellersMockByListName,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Renders with dropdown and table", async () => {
        const bookLibrary = (<BookLibrary/>);
        render(bookLibrary);
        
        // Side effects happening inside BookLibrary component, so we have to wait for it to finish.
        await waitFor(() => {
            const bestsellerDate = screen.getByTestId("date-subtitle-id");
            expect(bestsellerDate).toBeInTheDocument();
        });
        
        const dropdown = screen.getByTestId("select-test-id");
        const table = screen.getByTestId("paper-test-id");
        expect(dropdown).toBeInTheDocument();
        expect(table).toBeInTheDocument();
        expect(screen.getByText("Book Library")).toBeInTheDocument();
        
      });
  
  
});