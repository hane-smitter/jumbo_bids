import React from "react";
import {
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import Styled from "./Styled";
import defaultImg from "../../../../../images/products/defaultImg.jpeg";
import MoneyFormat from "../../../../utils/MoneyFormat";
import CountDown from "./countDown";

const LightBox = ({ product }) => {
  return (
    <Styled.CardRoot raised>
      <Styled.CardImage
        component={"img"}
        src={product?.product?.image ? product?.product?.image : defaultImg}
        title={product?.product?.name}
      />

      <CardContent>
        <CountDown product={product} />
        <Typography variant="body2" component="p" sx={{ mt: 2 }}>
          Retail Price @ {MoneyFormat(product?.product?.cost)}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontWeight: "fontWeightMedium" }}
        >
          Slots Remaining: {product?.totalslots ?? 0}
        </Typography>
        <Styled.BtnContainer>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Purchase @ Retail Price
          </Button>
        </Styled.BtnContainer>
      </CardContent>
    </Styled.CardRoot>
  );
};

export default React.memo(LightBox);
