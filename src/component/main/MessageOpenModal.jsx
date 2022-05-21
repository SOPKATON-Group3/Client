import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";
import { default as Line } from "component/common/assets/images/lines.svg";
import { postMessage } from "apis/main.api";
import { useState } from "react";

function MessageOpenModal({ hidden, hideModal, messageInfo }) {
  const fetchStored = async () => {
    const { data } = await postMessage(true, false);
    console.log(data);
  };
  const deleteMessage = async () => {
    const { data } = await postMessage(true, false);
    console.log(data);
  };
  return (
    <>
      {!hidden && (
        <>
          <StyledModalWrapper onClick={hideModal}>
            <StyledModalContentWrapper>
              <StyledLine src={Line} />
              <StyledUnlockImage src={UnLock} alt="unlock" />
              <StyledNickName>{messageInfo.nickname}</StyledNickName>
              <StyledModalContent>{messageInfo.contents}</StyledModalContent>
            </StyledModalContentWrapper>
            <StyledButtonWrapper>
              <button onClick={deleteMessage}>삭제</button>
              <button onClick={fetchStored}>보관</button>
            </StyledButtonWrapper>
          </StyledModalWrapper>
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
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

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 2.8rem;
  justify-content: center;
  margin-top: 90rem;

  button {
    border-radius: 2.6rem;
    width: 10.3rem;
    height: 5.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:nth-child(1) {
    color: white;
    background-color: transparent;
    border: 1px solid white;
  }
  button:nth-child(2) {
    background-color: white;
    border: 1px solid white;
  }
`;

export default MessageOpenModal;
