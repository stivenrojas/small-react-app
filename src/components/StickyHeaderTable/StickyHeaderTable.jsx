import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress  from "@mui/material/LinearProgress";
import { Transition } from "react-transition-group";
import "./StickyHeaderTable.scss"
const { v4: uuidv4 } = require("uuid");

const FADE_TRANSITION_STATES = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, position: "absolute", visibility: "hidden" },
};

const FADE_TRANSITION = (duration, state) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  ...FADE_TRANSITION_STATES[state],
});

const StickyHeaderTable = (props) => {
  const {
    dataArray,
    columns,
    className,
    loading,
  } = props;
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsLoading(loading);
    } else {
      // Timeout here to avoid a jarring flicker if the load time is quick
      setTimeout(() => {
        setIsLoading(loading);
      }, 200);
    }
  }, [loading]);

    return (
      <div className={className}>
        <Paper sx={{ width: "100%", overflow: "hidden", margin: "auto" }} data-testid="paper-test-id">
          <TableContainer sx={{ maxHeight: 500 }}>
            <Transition in={isLoading} timeout={200}>
              {(state) => (
                <LinearProgress
                  data-testid="progress"
                  style={FADE_TRANSITION(500, state)}
                  className="loading-indicator"
                />
              )}
            </Transition>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, textAlign: "left", fontWeight: "bold" }}
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
                  )}
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
       </div> 
    );
};

StickyHeaderTable.defaultProps = {
  className: "",
};

StickyHeaderTable.propTypes = {
  dataArray: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default StickyHeaderTable;