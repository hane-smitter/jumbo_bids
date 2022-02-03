import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { red } from "@mui/material/colors";

import FutureTimeCalc from "../../../../utils/FutureTimeCalc";

const CountDownBox = styled(Box)`
  width: 100%;
  .paint {
    color: ${({ theme, alert }) =>
      alert ? red[400] : theme.palette.common.black};
  }
  & > span:first-of-type {
    margin-inline-start: 0px !important;
  }
`;
const Time = styled(Typography)`
  font-weight: 700;
  width: ${({ theme, time }) => (time ? "2ch" : "")};
  margin-inline-start: ${({ theme, time }) => time && "5px"};
`;
const Styled = {
  CountDownBox,
  Time,
};

const CountDown = ({ product }) => {
  const defaultCountDownTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  };
  const [countDownTime, setCountDownTime] = useState(defaultCountDownTime);

  function updateTime() {
    setCountDownTime(FutureTimeCalc(product?.startTime, product?.endTime));
  }
  useEffect(() => {
    let interval;
    if (product?.endTime) {
      interval = setInterval(() => {
        updateTime();
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [product]);
  return (
    <Styled.CountDownBox
      alert={Boolean(product?.slots) ? undefined : "1"}
    >
      <Styled.Time variant="body1" className="paint" component="p">
        Ends in:{" "}
      </Styled.Time>

      <div>
        {countDownTime.days !== "00" && (
          <>
            <Styled.Time
              className="paint"
              variant="body2"
              time="1"
              component="span"
            >
              {countDownTime.days}
            </Styled.Time>
            <Styled.Time variant="body2" className="paint" component="span">
              Days
            </Styled.Time>
          </>
        )}
        <Styled.Time
          variant="body2"
          className="paint"
          time="1"
          component="span"
        >
          {countDownTime.hours}
        </Styled.Time>
        <Styled.Time variant="body2" className="paint" component="span">
          Hrs
        </Styled.Time>
        <Styled.Time
          variant="body2"
          className="paint"
          time="1"
          component="span"
        >
          {countDownTime.minutes}
        </Styled.Time>
        <Styled.Time variant="body2" className="paint" component="span">
          Mins
        </Styled.Time>
        <Styled.Time
          variant="body2"
          className="paint"
          time="1"
          component="span"
        >
          {countDownTime.seconds}
        </Styled.Time>
        <Styled.Time variant="body2" className="paint" component="span">
          Secs
        </Styled.Time>
      </div>
    </Styled.CountDownBox>
  );
};

export default React.memo(CountDown);
