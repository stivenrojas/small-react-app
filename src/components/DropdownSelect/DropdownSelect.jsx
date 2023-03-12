import React from "react";
import { isEmpty } from "lodash";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const DropdownSelect = (props) => {
    const {
        fieldName,
        fieldValue,
        handleDropdownChange,
        defaultValue,
        dropDownOptions,
        className,
      } = props;

    const displayDropdown = () => {
      return(
        <div className="flex col">
          <div className="row mx-auto text-dark h5">{fieldName}</div>
          <div className="row">
          <Box sx={{ width: 300 }} className={className}
        >
            <Select
              labelId="list-name-filter-id-label"
              id="list-name-filter-id"
              value={fieldValue || "All"}
              label={fieldName}
              onChange={handleDropdownChange}
              sx={{
                width: 350,
                height: 40,
              }}
              data-testid="select-test-id"
              style={{ backgroundColor: "white", color: "black" }}
              variant="standard"
            >
              <MenuItem key={`default_option_${defaultValue}`} value={defaultValue}>
                {defaultValue}
              </MenuItem>
              {!isEmpty(dropDownOptions) && dropDownOptions.map((option) => {
                return(
                  <MenuItem
                    value={option}
                    key={`${option}_key`}
                  >
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
        </Box>
          </div>
          
        </div>
        
      )
    }

    return (displayDropdown());
};

export default DropdownSelect;