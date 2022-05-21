import styled from "styled-components";
function Layout({ children }) {
  return (
    <StyledRoot>
      <StyledMain>{children}</StyledMain>
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
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;
