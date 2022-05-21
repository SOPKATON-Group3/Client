import styled from "styled-components";
import { ReactComponent as unLock } from "component/common/assets/icon/unLock.svg";

function unLockContainer() {
  return (
    <StyledRoot>
      <UnLockWrapper>
        <UnLock1 />
      </UnLockWrapper>
      <UnLockWrapper>
        <UnLock2 />
      </UnLockWrapper>
      <UnLockWrapper>
        <UnLock3 />
      </UnLockWrapper>
      <UnLockWrapper>
        <UnLock4 />
      </UnLockWrapper>
      <UnLockWrapper>
        <UnLock5 />
      </UnLockWrapper>
      <UnLockWrapper>
        <UnLock6 />
      </UnLockWrapper>
    </StyledRoot>
  );
}

export default unLockContainer;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
`;

const UnLock1 = styled(unLock)`
  position: absolute;
  top: 52.998rem;
  left: 10.269rem;
  transform: rotate(20.18deg);
  z-index: 2;
`;

const UnLockWrapper = styled.button`
  cursor: pointer;
`;

const UnLock2 = styled(unLock)`
  position: absolute;
  top: 76.5rem;
  left: 36.2rem;
  z-index: 2;
`;
const UnLock3 = styled(unLock)`
  position: absolute;
  top: 65.412rem;
  left: 73.2rem;
  z-index: 2;
`;
const UnLock4 = styled(unLock)`
  position: absolute;
  top: 62.871rem;
  left: 115.83rem;
  transform: rotate(-11.43deg);
  z-index: 2;
`;
const UnLock5 = styled(unLock)`
  position: absolute;
  top: 74.051rem;
  left: 159.643rem;
  transform: rotate(27.57deg);
  z-index: 2;
`;
const UnLock6 = styled(unLock)`
  position: absolute;
  top: 50.204rem;
  left: 167.755rem;
  transform: rotate(-16.22deg);
  z-index: 2;
`;
