import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BiddersBoxContainer = styled(Box)`
  position: absolute;
  left: 46%;
  transform: translateX(-50%);
  z-index: 20;

  @media only screen and (max-width: 1030px) {
    & {
      left: 47%;
    }
  }
  @media only screen and (max-width: 970px) {
    & {
      display: none;
    }
  }
`;

const Styled = {
  BiddersBoxContainer,
};

export default Styled;
