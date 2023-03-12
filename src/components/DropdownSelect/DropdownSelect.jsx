import React from "react";
import { isEmpty } from "lodash";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
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
        <Box sx={{ width: 300 }} className={className}
        >
          <FormControl >
            <InputLabel
              id="demo-simple-dropwdown-label"
              className="text-dark"
            >
              {fieldName}
            </InputLabel>
            <Select
              labelId="list-name-filter-id-label"
              id="list-name-filter-id"
              value={fieldValue || "All"}
              label={fieldName}
              onChange={handleDropdownChange}
              sx={{
                width: 350,
                height: 50,
              }}
              data-testid="select-test-id"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <MenuItem key="All" value="All">
                {defaultValue}
              </MenuItem>
              {!isEmpty(dropDownOptions) && dropDownOptions.map((list) => {
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

    return (displayDropdown());
};

export default DropdownSelect;