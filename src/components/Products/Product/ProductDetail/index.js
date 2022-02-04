import React, { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { red, grey } from "@mui/material/colors";

import MoneyFormat from "../../../utils/MoneyFormat/index.js";
import CountDown from "./CountDown";

const SeeDetailsBtn = styled(Button)`
  border-radius: 20px;
  font-size: 0.75rem;
  min-width: ${({ theme }) => theme.typography.pxToRem(150)};
  margin-block-start: 15px;
`;
const Text = styled(Typography)(({ theme, role }) => ({
  textAlign: "left",
  color: role?.includes("alert") ? red[400] : grey[800],
  fontWeight: role?.includes("alert") && theme.typography.fontWeightMedium,
}));

const ProductDetail = ({ product }) => {
  const [cardBlinking] = useState(!Boolean(product.slots));

  const cardVariants = {
    blink: {
      // backgroundColor: ['rgba(255, 255, 255, .9)', 'rgba(237, 82, 73, .1)', 'rgba(243, 32, 19, .3)', 'rgba(237, 82, 73, .1)', 'rgba(255, 255, 255, .9)'],
      backgroundColor: ["#f0f0f0", "#e6c96c", "#ebb957", "#f1a53c", "#f79224"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        repeatDelay: 1,
      },
    },
  };
  /* <Link
      to={location}
      style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
      className={classes.darkBox}
      variants={cardVariants}
      animate={cardBlinking ? "blink" : ""}
    > */
  return (
    <>
      <Text
        variant="body2"
        sx={{ fontWeight: "fontWeightMedium" }}
        gutterBottom
      >
        Lot{" "}
        <Text
          component="span"
          variant="caption"
          sx={{ color: "primary.main", fontWeight: "fontWeightBold" }}
        >
          # {product.totalslots ?? 0}
        </Text>
      </Text>
      {product?.prodbids[0]?.user && (
        <>
          <Text variant="body2">
            Last Bidder: {product?.prodbids[0]?.user?.fullname}
          </Text>
          <Text variant="body2" gutterBottom>
            Location: {product?.prodbids[0]?.user?.location}
          </Text>
        </>
      )}
      <Text role={cardBlinking ? "alert" : ""} variant="body2" component="p">
        Ends in:
      </Text>
      <CountDown product={product} nearEnd={cardBlinking} />
      <Text
        variant="caption"
        sx={{ fontWeight: "fontWeightLight" }}
        component="p"
      >
        Retail Price: {MoneyFormat(product.product.cost)}
      </Text>
      <Text
        sx={{ fontWeight: "fontWeightBold" }}
        variant="caption"
        component="p"
      >
        Bid starts{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          @{MoneyFormat(product.bidPrice)}
        </Box>{" "}
        only
      </Text>
      <SeeDetailsBtn
        size="small"
        component={Link}
        to={"/detail"}
        state={{ product }}
        variant="contained"
      >
        see details
      </SeeDetailsBtn>
    </>
  );
};
export default React.memo(ProductDetail);
