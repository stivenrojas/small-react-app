import React from "react";
import { isEmpty } from "lodash";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const { v4: uuidv4 } = require("uuid");

const StickyHeaderTable = (props) => {
  const {
    dataArray,
    columns,
    className,
  } = props;
  
    return (
      <div className={className}>
        <Paper sx={{ width: '100%', overflow: 'hidden', margin: "auto" }} data-testid="paper-test-id">
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, textAlign: 'left' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!isEmpty(dataArray) && dataArray.map((row, rowIndex) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={`tablerow_key_${uuidv4()}`}>
                          
                          {columns.map((col, index)=> {
                            const keyId = `table_cell_key_${rowIndex}_${index}_${uuidv4}`;
                            const cellValue = row[col.id];
                            return (
                              <TableCell key={keyId} align="left" data-testid={`cell-test-id-${rowIndex}-${index}`}>
                                {cellValue}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
       </div> 
    );
};

export default StickyHeaderTable;