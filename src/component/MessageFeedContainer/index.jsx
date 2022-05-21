import styled from "styled-components";
import { ReactComponent as Background } from "component/common/assets/images/mainBackground.svg";
import Messages from "./Messages";

function MessageFeedContainer() {
  return (
    <StyledRoot>
      <StBackground />
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

const StBackground = styled(Background)`
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.3;
`;

const StyledHeader = styled.div`
  margin-top: 88px;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 160%;
`;

const StyledMainWrapper = styled.div`
  margin-top: 13.2rem;
`;

export default MessageFeedContainer;
