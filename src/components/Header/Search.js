import React from "react";
import { FormControl, InputAdornment, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import Styled from "./Styled";

const Search = ({ lgScreen }) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { marginInline: "auto" },
      })}
    >
      <FormControl>
        {lgScreen ? (
          <Styled.SearchInput
            color="secondary"
            placeholder="Search inventory by model, name and more..."
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        ) : (
          <Styled.SearchInput
            color="secondary"
            placeholder="Search inventory by model, name and more..."
            disableUnderline={true}
            sx={{ pl: 1 }}
          />
        )}
      </FormControl>
      <Styled.Btn search="1" color="secondary" variant="contained">
        {lgScreen ? "Search Inventory" : <SearchIcon />}
      </Styled.Btn>
    </Stack>
  );
};

export default Search;
