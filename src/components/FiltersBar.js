import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

const FilterBar = ({ widthPer, handleFiterBar, value, categories }) => {
  console.log("Categ", value);
  return (
    <Box width={widthPer}>
      <Select
        fullWidth
        variant="outlined"
        placeholder="Tag"
        onChange={handleFiterBar}
        value={value}
        //onChange={}
      >
        {/* menuitem esmaha  */}
        <MenuItem value="">None</MenuItem>

        {categories.map((category, index) => {
          return (
            <MenuItem key={index} value={category.name}>
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default FilterBar;
