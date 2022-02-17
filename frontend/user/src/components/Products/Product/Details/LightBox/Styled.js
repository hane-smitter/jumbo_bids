import { Card, Stack, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

const CardRoot = styled(Card)(({ theme }) => ({
  minHeight: "400px",
  minWidth: "250px",

}));
const CardImage = styled(CardMedia)`
  object-fit: contain;
  height: 150px;
  max-height: 100%;
  max-width: 60%;
  margin: 5px auto 0 auto;
`;
const BtnContainer = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-block-start: 15px;
`;

const Styled = {
  CardRoot,
  BtnContainer,
  CardImage,
};

export default Styled;
