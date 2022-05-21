import styled from "styled-components";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";

function Header() {
  return (
    <StyledRoot>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledButtonWrapper>
        <button>기록하기</button>
        <Line />
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <button>둘러보기</button>
        <Line />
      </StyledButtonWrapper>
    </StyledRoot>
  );
}
export default Header;

const StyledRoot = styled.div`
  display: flex;
  padding-top: 5.7rem;
  align-items: center;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 7.7rem;
  margin-right: 6.2rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99;
  margin-right: 3.9rem;

  button {
    width: 8.1rem;
    height: 3.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
  }
`;

const Line = styled.div`
  width: 8.2rem;
  height: 0.2rem;
  background-color: white;
`;
