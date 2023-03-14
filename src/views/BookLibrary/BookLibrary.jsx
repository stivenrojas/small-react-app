import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import StickyHeaderTable from "../../components/StickyHeaderTable/StickyHeaderTable";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import NewsPaperService from "../../services/newsPaperService";
import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";
import "./BookLibrary.scss"

const BookLibrary = () => {
  // This view can serve as the main view for a Book Library page.

  const [listNames, setListNames] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [listNameFilter, setListNameFilter] = useState("All");
  const [bestSellerDate, setBestSellerDate] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // Returns the total count of books in the filtered list.
  const getTotalCount = () => {
    return filteredList.length;
  };

  // Renders a label indicating the bestsellers_date and total entries.
  const getBestSellersInfo = () => {
    return( 
      <div className="text-center mb-2">
        <h3 className="text-center text-dark" data-testid="date-subtitle-id">
          Best Sellers Date: {bestSellerDate}
        </h3>
        <h4 className="text-center text-dark">
          Results: {getTotalCount()}
        </h4>
      </div>
    );
  };

  // Returns a flattened array of books from all data results without list name filter.
  // To be able to be used generically for the StickyHeaderTable component.
  const transformData = (
    list
  ) => { 
    const flattenedArray = list.reduce((acc, element) => {
      const listName = element.list_name;
      const books = element.books.map((book)=> { return { ...book, listName }});
      return acc.concat(books);
    }, []);
    return flattenedArray;
  };
  
  // To handle necessary after mounting and on unmounting/cleanup steps.
  useEffect(() => {
    const getAllListNames = async() => {
      const response = await NewsPaperService.getAllBestSellersListNames();
      if (!isEmpty(response)) {
        const listNames = response.map(
          (listName) => {
            return { value: listName.list_name_encoded, displayLabel: listName.display_name }
          }
        );
        setListNames(listNames);
      }
    }
    getAllListNames(); 

    return () => { // Unmount cleanup.
      // Here goes some cleanup.
    }
  }, []);

  useEffect(() => {
    if (listNameFilter) {
      if (listNameFilter === "All") {
        const getAllBestSellers = async() => {
          setIsLoading(true);
          const allBestSellers = await NewsPaperService.getAllBestSellersBooks();
          setFilteredList(transformData(allBestSellers.lists))
          setBestSellerDate(allBestSellers.bestsellers_date)
          setIsLoading(false);
        }
        getAllBestSellers(); 
      }
      else{
        const getBooksByListName = async() => {
          setIsLoading(true);
          const booksByListName = await NewsPaperService.getBestSellersBooksByListName(listNameFilter);
          const flattenedList = booksByListName.books.map((book) =>
            { return { ...book, listName: booksByListName.list_name } }
          );
          setFilteredList(flattenedList);
          setBestSellerDate(booksByListName.bestsellers_date)
          setIsLoading(false);
        }
        getBooksByListName();
      }
    }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listNameFilter]);

  const handleDropdownChange = (event, child) => {  
    setListNameFilter(event.target.value);
  };

  return (
    <div className="flex text-center book-library-container">
      <h1 className="text-center text-dark mb-4">Book Library</h1>
      <div>
        {getBestSellersInfo()}
        <div className="m-4">
          <DropdownSelect
            fieldName="List Name"
            fieldValue={listNameFilter}
            handleDropdownChange={handleDropdownChange}
            dropDownOptions={listNames}
            defaultValue="All"
            className="mb-2"
          />
          <StickyHeaderTable
            columns={BEST_SELLERS_COLUMNS}
            dataArray={filteredList}
            className="mt-4"
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
