import React from "react";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  width: "100vw",
  maxWidth: "100%",
}));
const ContentContainer = styled("div")`
  width: 100%;
  padding-inline: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: relative;
`;

const Layout = () => {
  return (
    <Container className="wrapper">
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
