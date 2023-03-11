import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import NewsPaperService from "../services/newsPaperService";

const columns = [
  { id: 'listName', label: 'List Name', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'author',
    label: 'Author(s)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'publisher',
    label: 'Publisher',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'currentRank',
    label: 'Current Rank',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'purchaseLinks',
    label: 'Purchase Links',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];


const StickyHeadTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
   
    useEffect(() => {
        const getBestSellers = async() => { 
            setLoading(true);
            const bestSellers = await NewsPaperService.getAllBestSellers();
            console.log(bestSellers)
            setData(bestSellers);
        }
        getBestSellers();
        setLoading(false);
    }, []);


    return (
      <div>
        {isEmpty(data)? 
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box> :
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {data.lists.map((list) => {
                    return list.books.map((book) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={book.title}>
                          <TableCell key={list.listName} align="right">
                            {list.list_name}
                          </TableCell>
                          <TableCell key={book.title} align="right">
                            {book.title}
                          </TableCell>
                          <TableCell key={book.author} align="right">
                            {book.author}
                          </TableCell>
                          <TableCell key={book.description} align="right">
                            {book.description}
                          </TableCell>
                          <TableCell key={book.publisher} align="right">
                            {book.publisher}
                          </TableCell>
                          <TableCell key={book.rank} align="right">
                            {book.rank}
                          </TableCell>
                          <TableCell key={book.amazon_product_url} align="right">
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