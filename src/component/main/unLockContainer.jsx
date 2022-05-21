import styled from "styled-components";
import MessageOpenModal from "component/main/MessageOpenModal";
import { useState } from "react";

import unLock1 from "component/common/assets/icon/unLock.png";
import unLock2 from "component/common/assets/icon/unLock2.png";
import unLock3 from "component/common/assets/icon/unLock3.png";
import unLock4 from "component/common/assets/icon/unLock4.png";
import unLock5 from "component/common/assets/icon/unLock5.png";
import unLock6 from "component/common/assets/icon/unLock6.png";
import unLock7 from "component/common/assets/icon/unLock7.png";
import unLock8 from "component/common/assets/icon/unLock8.png";
import unLock9 from "component/common/assets/icon/unLock9.png";

import { postMessage } from "apis/main.api";

function unLockContainer({ isAbleKey }) {
  const [hidden, setHidden] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [messageInfo, setMessageInfo] = useState({
    nickname: "",
    contents: "",
  });

  const checkIfKeyExist = (isAbleKey) => {
    if (isAbleKey !== true) return;

    setHidden(false);
  };

  const fetchMessage = async () => {
    const { data } = await postMessage();
    setMessageInfo(data);
  };

  const unLockInfo = [
    [unLock1, 46.7, 20.6],
    [unLock2, 70.7, 45],
    [unLock3, 32.2, 50.7],
    [unLock4, 54.3, 73.3],
    [unLock5, 78, 62.5],
    [unLock6, 32.2, 110.8],
    [unLock7, 61.2, 122.7],
    [unLock8, 49.1, 155.2],
    [unLock9, 63.6, 110.8],
  ];

  return (
    <StyledRoot>
      {unLockInfo.map((unLock, index) => (
        <UnLockWrapper
          key={index}
          top={unLock[1]}
          left={unLock[2]}
          onClick={() => {
            checkIfKeyExist(isAbleKey);
            fetchMessage();
          }}
        >
          <img src={unLock[0]} alt="자물쇠" />
        </UnLockWrapper>
      ))}
      <MessageOpenModal
        hidden={!showModal}
        hideModal={() => setShowModal(false)}
        messageInfo={messageInfo}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  position: relative;
`;

const UnLockWrapper = styled.button`
  cursor: inherit;
  position: absolute;
  top: ${(props) => props.top}rem;
  left: ${(props) => props.left}rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export default unLockContainer;
