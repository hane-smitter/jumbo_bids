import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

import FutureTimeCalc from "../../../utils/FutureTimeCalc";

const CountDownBox = styled(Box)`
  margin-block-end: 10px;
  span:first-of-type {
    margin-inline-start: 0;
  }
`;
const Time = styled(Typography)`
  width: 2ch;
  margin-inline-start: 10px;
  color: ${({ theme, danger }) =>
    danger.toLowerCase() === "true" ? "red" : theme.palette.common.black};
`;
const Text = styled(Typography)`
  text-transform: lowercase;
  color: ${({ theme, danger }) =>
    danger.toLowerCase() === "true" ? "red" : theme.palette.common.black};
`;

const CountDown = ({ product, nearEnd }) => {
  const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  };

  const [countDownTime, setCountDownTime] = useState(defaultRemainingTime);

  function updateCountDown() {
    setCountDownTime(FutureTimeCalc(product.startTime, product.endTime));
  }
  useEffect(() => {
    let interval = setInterval(() => {
      updateCountDown();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CountDownBox>
      <Time variant="caption" danger={nearEnd.toString()}>
        {countDownTime.days}
      </Time>
      <Text variant="body2" component="span" danger={nearEnd.toString()}>
        Days
      </Text>

      <Time variant="caption" danger={nearEnd.toString()}>
        {countDownTime.hours}
      </Time>
      <Text variant="body2" component="span" danger={nearEnd.toString()}>
        Hrs
      </Text>

      <Time variant="caption" danger={nearEnd.toString()}>
        {countDownTime.minutes}
      </Time>
      <Text variant="body2" component="span" danger={nearEnd.toString()}>
        Mins
      </Text>

      <Time variant="caption" danger={nearEnd.toString()}>
        {countDownTime.seconds}
      </Time>
      <Text variant="body2" component="span" danger={nearEnd.toString()}>
        Sec
      </Text>
    </CountDownBox>
  );
};

export default CountDown;
