import {
  Stack,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const CB = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  padding: "20 0",
  position: "relative",
  backgroundColor: theme.palette.primary.dark,
}));
const CBList = styled(List)(({ theme }) => ({
  maxWidth: 300,
  width: "100%",
}));
const CBCollapse = styled(Collapse)(({ theme }) => ({
  width: "100%",
  maxWidth: 300,
  position: "absolute",
  backgroundColor: "#486391",
  zIndex: 10,
  overflow: "hidden",
  maxHeight: 300,
  top: "100%",
}));
const CBListItem = styled(ListItem)(({ theme }) => ({}));
const CBListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40
}));
const CBListItemText = styled(ListItemText)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}));

const Styled = {
  CB,
  CBList,
  CBCollapse,
  CBListItem,
  CBListItemIcon,
  CBListItemText,
};

export default Styled;
