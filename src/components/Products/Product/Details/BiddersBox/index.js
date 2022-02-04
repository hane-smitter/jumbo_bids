import React, { useState } from "react";
import { Tooltip, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";

import Styled from "./Styled";

const BiddersBox = ({ bidders, loading }) => {
  const [showCurrentBids, setShowCurrentBids] = useState(true);

  const toggleCloseView = () => {
    setShowCurrentBids((prev) => !prev);
  };
  return (
    <>
      {!showCurrentBids && (
        <Button
          variant="contained"
          sx={{ bgColor: "common.black" }}
          onClick={toggleCloseView}
        >
          see item's recent bids
        </Button>
      )}
      {!loading && showCurrentBids && (
        <Styled.TbContainer>
          <Styled.TbCloseContainer>
            <Tooltip title="close">
              <Styled.TbClose>
                <CloseIcon onClick={toggleCloseView} />
              </Styled.TbClose>
            </Tooltip>
          </Styled.TbCloseContainer>
          <Styled.TbTitle component="div">Recent Bids</Styled.TbTitle>
          <Styled.Tb
            sx={{ maxWidth: 400, maxHeight: 300 }}
            aria-label="current bidders table"
          >
            <Styled.TbHead>
              <Styled.TbRow>
                <Styled.TbCell align="right">Amount</Styled.TbCell>
                <Styled.TbCell>By</Styled.TbCell>
                <Styled.TbCell align="right">Location</Styled.TbCell>
                <Styled.TbCell align="right">On</Styled.TbCell>
              </Styled.TbRow>
            </Styled.TbHead>
            <Styled.TbBody>
              {bidders.topActiveBidders.map((activeBidder, index) => (
                <Styled.TbRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Styled.TbCell align="right">
                    {activeBidder?.bidAmountTotal}
                  </Styled.TbCell>
                  <Styled.TbCell component="th" scope="row">
                    {activeBidder?.user?.fullname}
                  </Styled.TbCell>
                  <Styled.TbCell align="right">
                    {activeBidder?.user?.location}
                  </Styled.TbCell>
                  <Styled.TbCell align="right">
                    {dayjs(
                      new Date(activeBidder?.updatedAt ?? "").toISOString()
                    ).format("DD/MM/YYYY")}
                  </Styled.TbCell>
                </Styled.TbRow>
              ))}
            </Styled.TbBody>
          </Styled.Tb>
        </Styled.TbContainer>
      )}
    </>
  );
};

export default React.memo(BiddersBox);
