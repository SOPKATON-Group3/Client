import styled from "styled-components";
import { ReactComponent as unLock } from "component/common/assets/icon/unLock.svg";
import MessageOpenModal from "component/main/MessageOpenModal";
import { useState } from "react";

function unLockContainer({ isAbleKey }) {
  const [showModal, setShowModal] = useState(false);

  const checkIfKeyExist = (isAbleKey) => {
    // if (isAbleKey === true)
  };

  return (
    <StyledRoot>
      <UnLockWrapper1
        onClick={() => {
          checkIfKeyExist(isAbleKey);
        }}
      >
        <UnLock1 />
      </UnLockWrapper1>
      <UnLockWrapper2>
        <UnLock2 />
      </UnLockWrapper2>
      <UnLockWrapper3>
        <UnLock3 />
      </UnLockWrapper3>
      <UnLockWrapper4>
        <UnLock4 />
      </UnLockWrapper4>
      <UnLockWrapper5>
        <UnLock5 />
      </UnLockWrapper5>
      <UnLockWrapper6>
        <UnLock6 />
      </UnLockWrapper6>
      <MessageOpenModal
        hidden={!showModal}
        hideModal={() => {
          setShowModal(false);
        }}
      />
    </StyledRoot>
  );
}

export default unLockContainer;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
`;

const UnLock1 = styled(unLock)``;
const UnLockWrapper1 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 52.998rem;
  left: 10.269rem;
  transform: rotate(20.18deg);
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLock2 = styled(unLock)``;
const UnLockWrapper2 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 76.5rem;
  left: 36.2rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLock3 = styled(unLock)``;
const UnLockWrapper3 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 65.412rem;
  left: 73.2rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLock4 = styled(unLock)``;
const UnLockWrapper4 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 62.871rem;
  left: 115.83rem;
  transform: rotate(-11.43deg);
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLock5 = styled(unLock)``;
const UnLockWrapper5 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 74.051rem;
  left: 159.643rem;
  transform: rotate(27.57deg);
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLock6 = styled(unLock)``;
const UnLockWrapper6 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 50.204rem;
  left: 167.755rem;
  transform: rotate(-16.22deg);
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;
