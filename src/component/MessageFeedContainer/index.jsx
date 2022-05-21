import styled from "styled-components";
import Messages from "./Messages";
import { default as closeButton } from "component/common/assets/icon/close.svg";
import { useNavigate } from "react-router-dom";

function MessageFeedContainer() {
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <StyledWrapper />
      <StyledHeaderWrapper>
        <StyledHeader>누군가 열어본 즐거움</StyledHeader>
        <button>
          <img src={closeButton} alt="close" onClick={() => navigate(-1)} />
        </button>
      </StyledHeaderWrapper>
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

const StyledHeaderWrapper = styled.div`
  margin-top: 14.3rem;
  display: flex;
  justify-content: center;
  & button {
    background: none;
    border: none;
  }
  & img {
    position: absolute;
    right: 24.4rem;
  }
`;

const StyledHeader = styled.div`
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
