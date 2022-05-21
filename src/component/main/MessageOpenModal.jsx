import { useState } from "react";
import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";

function MessageFeedModal({ hidden, hideModal }) {
  const [modalInfo, setModalInfo] = useState({
    nickname: "솝커톤랄라라가나다라",
    description:
      "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor 넌 모르지 떨군 세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor 넌 모르지 떨군 세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor 넌 모르지 떨군  넌 모르지 떨군  세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머로",
  });
  return (
    <>
      {!hidden && (
        <>
          <StyledModalWrapper onClick={hideModal}></StyledModalWrapper>
          <StyledModalContentWrapper>
            <StyledUnlockImage src={UnLock} alt="unlock" />
            <StyledNickName>{modalInfo.nickname}</StyledNickName>
            <StyledModalContent>{modalInfo.description}</StyledModalContent>
            <StyledButtonWrapper>
              <button>저장하기</button>
              <button>삭제하기</button>
            </StyledButtonWrapper>
          </StyledModalContentWrapper>
        </>
      )}
    </>
  );
}

const StyledModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
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
  padding: 15px;
  z-index: 1;
`;
const StyledUnlockImage = styled.img`
  position: absolute;
  top: -10rem;
`;

const CommonFontStyle = styled.strong`
  width: 67.9rem;
  font-weight: 400;
  line-height: 160%;
`;

const StyledNickName = styled(CommonFontStyle)`
  font-size: 22px;
`;

const StyledModalContent = styled(CommonFontStyle)`
  font-size: 25px;
  text-align: justify;
  text-align-last: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 2.3rem;
  button {
    width: 20.1rem;
    height: 6.7rem;
    border-radius: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MessageFeedModal;
