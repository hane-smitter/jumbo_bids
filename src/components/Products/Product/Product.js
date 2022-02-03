import React  from "react";
import { CardContent, Tooltip, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import Styled from "./Styled";
import defaultImg from "../../../images/products/defaultImg.jpeg";
import ProductDetail from "./ProductDetail";

const Product = ({ product }) => {

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

  return (
    <Styled.CardRoot
      component={motion.div}
      variants={cardVariants}
    >
      <Styled.SectionImage>
        <CardMedia
          component="img"
          src={product.product.image || defaultImg}
          alt={product.product.name}
        />
      </Styled.SectionImage>
      <Styled.SectionContent>
        <Styled.CardContentData>
          <Tooltip title={product.product.name} placement="top-start">
            <Styled.CardHeading
              disableTypography
              sx={{ width: "100%" }}
              subheader={
                <Styled.CardHeadingText variant="body2">
                  {product.product.name.length > 60 ?
                  product.product.name.substr(0, 20) + "..." :
                  product.product.name}
                </Styled.CardHeadingText>
              }
            />
          </Tooltip>
          {/* product details */}
          <ProductDetail product={product} />
          {/* product details form */}
          {/* <BidForm product={product} /> */}
        </Styled.CardContentData>
      </Styled.SectionContent>
    </Styled.CardRoot>
  );
};

export default Product;
