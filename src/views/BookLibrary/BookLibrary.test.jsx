// import "@testing-library/jest-dom";
// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import StickyHeadTable from "./SortTable";
// import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";
// import newsPaperService from "../../services/newsPaperService";

// jest.mock("../../services/newsPaperService");

// describe("BookLibrary tests", () => {
//     const bestSellersMockData = {
//         bestsellers_date: "2023-03-04",
//         next_published_date: "",
//         published_date: "2023-03-19",
//         lists: [
//             {
//                 list_id: 1,
//                 list_name: "Combined Print and E-Book Fiction",
//                 display_name: "Combined Print and E-Book Fiction",
//                 books: [
//                     {
//                         title: "STORM WATCH",
//                         description: "The 23rd book in the Joe Pickett series. Joe and Nate might be on opposite sides for the first time.",
//                         author: "C.J. Box",
//                         rank: 1,
//                         publisher: "Putnam",
//                         amazon_product_url: "https://www.amazon.com/dp/0593331303?tag=NYTBSREV-20",
//                     }
//                 ],
//             },
//             {
//                 list_id: 1,
//                 list_name: "Hardcover Fiction",
//                 display_name: "Hardcover Fiction",
//                 books: [
//                     {
//                         title: "THE ADVENTURES OF AMINA AL-SIRAFI",
//                         description: "A former pirate on the Indian Ocean is asked to retrieve her comrade’s kidnapped daughter",
//                         author: "Shannon Chakraborty",
//                         rank: 8,
//                         publisher: "Harper Voyager",
//                         amazon_product_url: "https://www.amazon.com/dp/0062963503?tag=NYTBSREV-20",
//                     }
//                 ],
//             }
            
//         ],
//     }

//     beforeEach(() => {
//         newsPaperService.getAllBestSellers.mockReturnValue(
//             bestSellersMockData,
//         );
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });


  
  
// });