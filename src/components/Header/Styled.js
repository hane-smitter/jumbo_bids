import { styled } from "@mui/system";
import { Link, Button, Stack, Input } from "@mui/material";

const LogoLink = styled(Link)`
  display: block;
  width: 200px;
`;
const RouteLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 14px;
  padding-inline: 10px;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
  background-color: transparent;
  transition: background-color 100ms ease-in;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
const Btn = styled(Button)(({ theme, search, signin }) => ({
  textTransform: "capitalize",
  marginInline: "10px",
  transition: "background-color 200ms ease-in",
  fontSize: "1rem",
  backgroundColor: search
    ? theme.palette.secondary.main
    : theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: search
      ? theme.palette.secondary.dark
      : theme.palette.primary.dark,
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: signin
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    color: "#333333",
    "&:hover": {
      backgroundColor: signin
        ? theme.palette.primary.dark
        : theme.palette.secondary.dark,
    },
  },
}));
const StackCont = styled(Stack)`
  background-color: rgb(29, 30, 32);
  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0),
    50%,
    rgb(54, 120, 254)
  );
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  nav {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    list-style: none;
    margin: 0;
    padding-inline-start: 30px;
  }
  & > svg {
    margin: 0;
    color: #ffffff;
  }
`;
const SearchInput = styled(Input)`
  background-color: #ffffff;
  outline: none;
  width: 20em;
  border: 2px solid #c0c8d1;
  border-radius: 4px;
  color: #333333;
  & input::placeholder {
    font-size: 13px;
  }
  @media only screen and(max-width: 450px) {
    width: auto;
  }
`;

const Styles = {
  LogoLink,
  Btn,
  StackCont,
  RouteLink,
  SearchInput,
};

export default Styles;
