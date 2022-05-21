import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
function Layout({ children }) {
  return (
    <StyledRoot>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledRoot>
  );
}

export default Layout;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  /* img {
    width: 600px;
  } */
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;
