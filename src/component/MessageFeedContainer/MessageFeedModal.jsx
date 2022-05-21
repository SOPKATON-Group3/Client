import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";
import { default as Line } from "component/common/assets/images/lines.svg";

function MessageFeedModal({ hidden, hideModal, modalInfo }) {
  return (
    <>
      {!hidden && (
        <>
          <StyledModalWrapper onClick={hideModal}></StyledModalWrapper>
          <StyledModalContentWrapper>
            <StyledLine src={Line} />
            <StyledUnlockImage src={UnLock} alt="unlock" />
            <StyledNickName>{modalInfo.nickname}</StyledNickName>
            <StyledModalContent>{modalInfo.contents}</StyledModalContent>
          </StyledModalContentWrapper>
        </>
      )}
    </>
  );
}

const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;
const StyledLine = styled.img`
  position: absolute;
  top: 0;
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;

  width: 81.5rem;
  height: 53rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background: #f2f2f2;
  border-radius: 41px;
  z-index: 1;
`;
const StyledUnlockImage = styled.img`
  position: absolute;
  top: -5rem;
  left: 1.1rem;
`;

const StyledNickName = styled.strong`
  position: absolute;
  top: 4rem;
  left: 5.7rem;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
`;

const StyledModalContent = styled.p`
  position: absolute;
  top: 11.4rem;
  left: 8rem;
  width: 67.9rem;
  font-weight: 400;
  font-size: 22px;
  line-height: 200%;
`;
export default MessageFeedModal;
