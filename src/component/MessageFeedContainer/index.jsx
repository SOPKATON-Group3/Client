import styled from "styled-components";
import Messages from "./Messages";

function MessageFeedContainer() {
  return (
    <StyledRoot>
      <StyledWrapper />
      <StyledHeader>누군가 열어본 행복</StyledHeader>

      <StyledMainWrapper>
        <Messages />
      </StyledMainWrapper>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  opacity: 0.7;
`;

const StyledHeader = styled.div`
  margin-top: 88px;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 160%;
  z-index: 1;
`;

const StyledMainWrapper = styled.div`
  margin: 13.2rem 0;
`;

export default MessageFeedContainer;
