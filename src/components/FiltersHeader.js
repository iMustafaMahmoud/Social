import { Box, Button } from "@material-ui/core";
import React from "react";
import { updateMostRecent, updateFilter } from "../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import FiltersBar from "../components/FiltersBar";

const FiltersHeader = () => {
  const dispatch = useDispatch();

  const updateAllFilters = (filterKey, filterValue) => {
    console.log("hereeee", filterKey, filterValue);
    if (filterKey === "category" && filterValue === "") {
      updateFilter(dispatch, "tag", ""); // if category will be cleared also clear tag
    }
    updateFilter(dispatch, filterKey, filterValue);
  };

  const { mostRecent, categories, filters } = useSelector((state) => state);

  const category = categories.find(
    (category) => category.name === filters.category
  );

  return (
    <Box width="34%" display="flex" justifyContent="space-evenly">
      <Button
        color={mostRecent ? "primary" : "default"}
        variant="contained"
        onClick={() => {
          updateMostRecent(dispatch, !mostRecent);
        }}
      >
        Most Recent
      </Button>
      <FiltersBar
        handleFiterBar={(event) =>
          updateAllFilters("category", event.target.value)
        }
        value={filters.category}
        categories={categories}
      />
      <FiltersBar
        handleFiterBar={(event) => updateAllFilters("tag", event.target.value)}
        categories={filters.category === "" ? [] : category.tags}
        value={filters.tag}
      />
    </Box>
  );
};

export default FiltersHeader;
