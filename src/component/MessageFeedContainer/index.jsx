import styled from "styled-components";
import Background from "component/common/assets/images/mainBackground.svg";
import Messages from "./Messages";

function MessageFeedContainer() {
  return (
    <StyledRoot>
      <StyledWrapper url={Background} />
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
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url(${props.url})`};
  opacity: 0.3;
`;

const StyledHeader = styled.div`
  margin-top: 88px;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 160%;
`;

const StyledMainWrapper = styled.div`
  margin: 13.2rem 0;
`;

export default MessageFeedContainer;
