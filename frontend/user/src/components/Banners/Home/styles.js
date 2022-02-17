import { styled } from "@mui/system";
import { Box } from "@mui/material";

const BannerCont = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 300px;
`;
const BannerImg = styled(Box)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: grab;
`;

const ArrowCont = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  background-color: rgba(255, 255, 255, 1);
  transition: ${({theme}) => theme.transitions.create(["background-color"], {
    duration: theme.transitions.duration.standard,
  })};
  border-radius: 50%;
  filter: drop-shadow(0 0 12px #333);
  width: 40px;
  height: 40px;
  display: flex;
  z-Index: 2;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;

export default { BannerImg, BannerCont, ArrowCont };
