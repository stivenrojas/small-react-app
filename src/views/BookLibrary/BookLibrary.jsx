import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import StickyHeaderTable from '../../components/StickyHeaderTable/StickyHeaderTable';
import DropdownSelect from '../../components/DropdownSelect/DropdownSelect';
import NewsPaperService from "../../services/newsPaperService";
import { BEST_SELLERS_COLUMNS } from "../../constants/BookLibraryConstants";


const BookLibrary = () => {
  // This view can serve as the main view for a Book Library page.

  const [data, setData] = useState(null); // Fetched original data to use in memory.
  const [filteredList, setFilteredList] = useState([]);
  const [listNameFilter, setListNameFilter] = useState("");

  // Returns the total count of books in the filtered list.
  const getTotalCount = () => {
    return filteredList.length;
  };

  // Renders a label indicating the bestsellers_date.
  const getBestSellersDate = () => {
    return(
      !isEmpty(filteredList) && ( 
      <div className="text-center mb-2">
        <h3 className="text-center text-dark">
          Best Sellers Date: {data.bestsellers_date}
        </h3>
        <h4 className="text-center text-dark">
          Results: {getTotalCount()}
        </h4>
      </div>
    ));
  };

  const tranformData = (
    list
  ) => { 
    const flattenedArray = list.reduce((acc, element) => {
      const listName = element.list_name;
      const books = element.books.map((book)=> { return { ...book, listName }});
      return acc.concat(books);
    }, []);
    return flattenedArray;
  };
  
  useEffect(() => {
    if (data === null) {
      const getBestSellers = async() => { 
        const bestSellers = await NewsPaperService.getAllBestSellers();
        console.log("Fetching", bestSellers)
        setData(bestSellers);
        
        console.log("Flattened", tranformData(bestSellers.lists))
        setFilteredList(tranformData(bestSellers.lists))
      }
      // Running twice due to the React.StrictMode. In production, it will run only once.
      getBestSellers(); 
    }

    return () => { // Unmount cleanup.
      // Here goes some cleanup.
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (data && !isEmpty(data.lists)) {
      if (listNameFilter === "All") {
        setFilteredList(tranformData(data.lists));
      }
      else{
        const newFilteredList = data.lists.filter((list) => {
          return list.list_name === listNameFilter;
        });
        setFilteredList(tranformData(newFilteredList));
      }
    }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listNameFilter]);

  const handleDropdownChange = (event) => {
    setListNameFilter(event.target.value);
  };

  return (
    <div className="flex">
      <h1 className="text-center text-dark mb-4">Book Library</h1>
      {getBestSellersDate()}
      <div className="m-4">
        <DropdownSelect
          fieldName="List Name"
          fieldValue={listNameFilter}
          handleDropdownChange={handleDropdownChange}
          dropDownOptions={data && !isEmpty(data.lists) ? data.lists : []}
          defaultValue="All"
          className="mt-4 mb-4"
        />
        
        <StickyHeaderTable
          columns={BEST_SELLERS_COLUMNS}
          dataArray={filteredList}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default BookLibrary;
