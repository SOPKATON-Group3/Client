import styled from "styled-components";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";
import mainBackground from "component/common/assets/images/mainBackground.svg";
import wireBackgroundImg, {
  ReactComponent as Wire,
} from "component/common/assets/images/wire.svg";
import UnLockContainer from "component/main/unLockContainer";
import selectKey from "component/common/assets/icon/selectKey.png";
import { useState } from "react";

function Main() {
  const [isAbleKey, setIsAbleKey] = useState(true);

  return (
    <StyledRoot url={mainBackgroundImg} isAbleKey={isAbleKey}>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <UnLockContainer isAbleKey={isAbleKey} />
      <StyledWireBackground url={wireBackgroundImg} />
      {!isAbleKey && (
        <StyledButtonWrapper>
          <button>작성하기</button>
          <button>보관함</button>
        </StyledButtonWrapper>
      )}
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.url})`};
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: ${(props) =>
    props.isAbleKey ? `url(${selectKey}) 45 45, pointer` : "default"};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.4rem;
`;

const StyledWireBackground = styled.div`
  position: absolute;
  background-image: ${(props) => `url(${props.url})`};
  width: 100%;
  height: 58%;
  bottom: 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  position: absolute;
  bottom: 6.6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  button {
    width: 31.9rem;
    height: 7.2rem;
    border-radius: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
