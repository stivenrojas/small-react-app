import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import NewsPaperService from "../../services/newsPaperService";
const { v4: uuidv4 } = require("uuid");

const columns = [
  { id: 'listName', label: 'List Name', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'author',
    label: 'Author(s)',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'publisher',
    label: 'Publisher',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'currentRank',
    label: 'Current Rank',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'purchaseLinks',
    label: 'Purchase Links',
    minWidth: 170,
    align: 'right',
  },
];

const StickyHeadTable = () => {
    const [data, setData] = useState([]); // Fetched original data to use in memory.
    const [filteredList, setFilteredList] = useState([]);
    const [listNameFilter, setListNameFilter] = useState("");    
   
    useEffect(() => {
      if (isEmpty(data)) {
        const getBestSellers = async() => { 
          const bestSellers = await NewsPaperService.getAllBestSellers();
          setData(bestSellers);
          setFilteredList(bestSellers.lists)
        }
      getBestSellers();
      }
        
    }, [data]);

    useEffect(() => {
      if (!isEmpty(data.lists)) {
        if (listNameFilter === "All") {
          console.log("All",data.lists.length)
          setFilteredList(data.lists);
        }
        else{
          const newFilteredList = data.lists.filter((list) => {
            return list.list_name === listNameFilter;
          });
          setFilteredList(newFilteredList);
        }
      }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listNameFilter]);

    const handleDropdownChange = (event) => {
      setListNameFilter(event.target.value);
    };

    // Returns the total count of books in the filtered list.
    const getTotalCount = () => {
      const total = filteredList.reduce((acc, list) => {
        return acc + list.books.length;
      }, 0);
      return total;
    }

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
    }

    // Renders dropdown field to filter by list name.
    const getDropdown = () => {
      return(
        <Box sx={{ width: 300 }}>
          <FormControl >
            <InputLabel id="demo-simple-select-label">List Name</InputLabel>
            <Select
              labelId="list-name-filter-id-label"
              id="list-name-filter-id"
              value={listNameFilter}
              label="List Name"
              onChange={handleDropdownChange}
              className="mt-4 mb-4"
              sx={{
                width: 150,
                height: 50,
              }}
            >
              <MenuItem key="All" value="All">
                All
              </MenuItem>
              {!isEmpty(data.lists) && data.lists.map((list) => {
                return(
                  <MenuItem
                    value={list.list_name}
                    key={`${list.list_name}_key`}
                  >
                    {list.list_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      )
    }

    return (
      <div className="m-4">
        <div className="row">
          {getDropdown()}
          {getBestSellersDate()}
        </div>
        
        {<Paper sx={{ width: '100%', overflow: 'hidden', margin: "auto" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!isEmpty(filteredList) && filteredList.map((list) => {
                    return list.books.map((book) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={book.title}>
                          <TableCell key={list.listName} align="right">
                            {list.list_name}
                          </TableCell>
                          <TableCell key={`${book.title}_${uuidv4()}`} align="right">
                            {book.title}
                          </TableCell>
                          <TableCell key={`${book.author}_${uuidv4()}`} align="right">
                            {book.author}
                          </TableCell>
                          <TableCell key={`${book.description}_${uuidv4()}`} align="right">
                            {book.description}
                          </TableCell>
                          <TableCell key={`${book.publisher}_${uuidv4()}`} align="right">
                            {book.publisher}
                          </TableCell>
                          <TableCell key={`${book.rank}_${uuidv4()}`} align="right">
                            {book.rank}
                          </TableCell>
                          <TableCell key={`${book.amazon_product_url}_${uuidv4()}`} align="right">
                            <a href={`${book.amazon_product_url}`}>{book.amazon_product_url}</a>
                          </TableCell>
                        </TableRow>
                      )
                    })
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      }
       </div> 
    
      
    );
};

export default StickyHeadTable;