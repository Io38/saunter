import { Divider, useMediaQuery } from "@mui/material";
import { Header } from "components/header";
import React from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "./Layout.styled";
import { Home } from "containers/home";
import { Snackbar } from "components/snackbar";

const Layout = () => {
  const isDesktop = useMediaQuery("(min-width:700px)");

  return (
    <Styled.Container>
      <Header />
      <Divider />
      <Styled.Main>{isDesktop ? <Home /> : <Outlet />}</Styled.Main>
      <Snackbar />
    </Styled.Container>
  );
};

export default Layout;
