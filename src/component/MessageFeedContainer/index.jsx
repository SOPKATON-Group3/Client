import styled from "styled-components";
import Messages from "./Messages";

function MessageFeedContainer() {
  return (
    <StyledRoot>
      <StyledWrapper />
      <StyledHeader>누군가 열어본 즐거움</StyledHeader>

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
  background: #000;
  opacity: 0.5;
`;

const StyledHeader = styled.div`
  margin-top: 14.3rem;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 160%;
  z-index: 1;
  color: #fff;
`;

const StyledMainWrapper = styled.div`
  margin: 13.2rem 0;
`;

export default MessageFeedContainer;
