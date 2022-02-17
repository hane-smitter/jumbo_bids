import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const TbContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  maxWidth: 400,
  maxHeight: 400,
  padding: 10,
  height: "max-content",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
}));
const TbHead = styled(TableHead)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));
const TbRow = styled(TableRow)(({ theme }) => ({}));
const TbCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
}));
const TbBody = styled(TableBody)(({ theme }) => ({}));
const Tb = styled(Table)(({ theme }) => ({}));
const TbTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
  textAlign: "center",
  marginBlockEnd: 1,
  textTransform: "uppercase",
}));
const TbCloseContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-block-end: 8px;
`;
const TbClose = styled("span")`
  transition: transform 100ms ease-out;
  &:hover {
    cursor: pointer;
    tranform: rotateZ(15deg);
  }
`;

const Styled = {
  TbContainer,
  TbHead,
  TbRow,
  TbCell,
  TbBody,
  TbTitle,
  TbCloseContainer,
  TbClose,
  Tb,
};

export default Styled;
