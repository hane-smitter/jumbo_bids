import React from "react";
import { FormControl, InputAdornment, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

import Styled from "./Styled";

const Search = ({ lgScreen }) => {
  const theme = useTheme();
  return (
    <Stack
      alignItems="center"
      direction="row"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { marginInline: "auto" },
        [theme.breakpoints.down("md")]: { justifyContent: "center" },
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
            placeholder="Search by model, name and more..."
            smScreen="1"
            disableUnderline={true}
            sx={{ pl: 1 }}
          />
        )}
      </FormControl>
      <Styled.Btn
        search="1"
        color="secondary"
        variant="contained"
        sx={{ [theme.breakpoints.down("md")]: { minWidth: 54 } }}
      >
        {lgScreen ? "Search Inventory" : <SearchIcon />}
      </Styled.Btn>
    </Stack>
  );
};

export default Search;
