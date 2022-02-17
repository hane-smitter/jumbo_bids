import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import LightBox from "./LightBox";
import DarkBox from "./DarkBox";
import BiddersBox from "./BiddersBox";
import ShowFeedback from "../../../utils/ShowFeedback";
import { unsetErr, unsetStatus } from "../../../../redux/actions/errors";
import {
  getProductDetails,
} from "../../../../redux/actions/products.js";
import { storeService } from "../../../../api/storeService.js";
import Styled from "./Styled.js";

const Detail = () => {
  const { details: focusProductDetails, loading } = useSelector(
    (state) => state.selectedProductDetails
  );
  const { err, status } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(Boolean(status?.info));
  const [errAlertOpen, setErrAlertOpen] = useState(Boolean(err.length > 0));
  const locationRouter = useLocation();
  const [product, setProduct] = useState({});

  function rehydrateProduct(bidId, productId) {
    dispatch(getProductDetails(bidId, productId));
  }

  useEffect(() => {
    const routeStateProduct = locationRouter?.state?.product;
    if (routeStateProduct) {
      storeService.saveBidInViewId = routeStateProduct._id;
      storeService.saveProductInViewId = routeStateProduct.product._id;
      setProduct(routeStateProduct);
    }
    rehydrateProduct(
      routeStateProduct._id || storeService.bidInView,
      routeStateProduct.product._id || storeService.productInView
    );
    return () => {
      dispatch(unsetErr());
      dispatch(unsetStatus());
    };
  }, []);
  useEffect(() => {
    focusProductDetails && setProduct(focusProductDetails.product);
  }, [focusProductDetails]);
  useEffect(() => {
    setAlertOpen(Boolean(status?.info));
  }, [status]);
  useEffect(() => {
    setErrAlertOpen(Boolean(err.length > 0));
  }, [err]);

  return (
    <>
      <ShowFeedback
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
        severity={status?.info?.severity}
        msg={status?.info?.message}
      />
      {err.length > 0 &&
        err.map((error) => (
          <ShowFeedback
            alertOpen={errAlertOpen}
            setAlertOpen={setErrAlertOpen}
            severity={"error"}
            msg={error.msg}
            title="Ooops!"
          />
        ))}

      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          xs={12}
          md={3}
          component={Stack}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <LightBox product={product} loading={loading} />
        </Grid>

        {focusProductDetails?.bidders?.topActiveBidders.length > 0 && (
          <Styled.BiddersBoxContainer>
            <BiddersBox
              bidders={focusProductDetails?.bidders}
              loading={loading}
            />
          </Styled.BiddersBoxContainer>
        )}
        <Grid item xs={12} md={4}>
          <DarkBox
            product={product}
            topBidder={focusProductDetails?.bidders?.highestBidder}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(Detail);
