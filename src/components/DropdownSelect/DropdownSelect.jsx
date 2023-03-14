import React from "react";
import PropTypes from "prop-types";
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
            <Box sx={{ width: 300 }} className={className}>
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
                      value={option.value}
                      key={`${option.value}_key`}
                    >
                      {option.displayLabel}
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

DropdownSelect.defaultProps = {
  className: "",
};

DropdownSelect.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  handleDropdownChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  dropDownOptions: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default DropdownSelect;