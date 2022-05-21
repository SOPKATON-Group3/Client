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

function unLockContainer({ isAbleKey }) {
  const [showModal, setShowModal] = useState(false);

  // const checkIfKeyExist = (isAbleKey) => {
  //   // if (isAbleKey === true)
  // };

  return (
    <StyledRoot>
      <UnLockWrapper1>
        <img src={unLock1} alt="자물쇠" />
      </UnLockWrapper1>
      <UnLockWrapper2>
        <img src={unLock2} alt="자물쇠" />
      </UnLockWrapper2>
      <UnLockWrapper3>
        <img src={unLock3} alt="자물쇠" />
      </UnLockWrapper3>
      <UnLockWrapper4>
        <img src={unLock4} alt="자물쇠" />
      </UnLockWrapper4>
      <UnLockWrapper5>
        <img src={unLock5} alt="자물쇠" />
      </UnLockWrapper5>
      <UnLockWrapper6>
        <img src={unLock6} alt="자물쇠" />
      </UnLockWrapper6>
      <UnLockWrapper7>
        <img src={unLock7} alt="자물쇠" />
      </UnLockWrapper7>
      <UnLockWrapper8>
        <img src={unLock8} alt="자물쇠" />
      </UnLockWrapper8>
      <UnLockWrapper9>
        <img src={unLock9} alt="자물쇠" />
      </UnLockWrapper9>
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

const UnLockWrapper1 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 58.8rem;
  left: 20.6rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper2 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 82.8rem;
  left: 45rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper3 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 44.3rem;
  left: 50.7rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper4 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 66.4rem;
  left: 73.3rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper5 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 90.1rem;
  left: 62.5rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper6 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 44.3rem;
  left: 110.8rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper7 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 73.3rem;
  left: 122.7rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper8 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 61.2rem;
  left: 155.2rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const UnLockWrapper9 = styled.button`
  cursor: inherit;
  position: absolute;
  top: 75.7rem;
  left: 166.1rem;
  z-index: 2;
  border: 0;
  outline: 0;
  background-color: transparent;
`;
