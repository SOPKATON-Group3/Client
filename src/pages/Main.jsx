import styled from "styled-components";
import mainBackground from "component/common/assets/images/mainBackground.svg";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";
import wireBackgroundImg, {
  ReactComponent as Wire,
} from "component/common/assets/images/wire.svg";
import UnLockContainer from "component/main/unLockContainer";
import selectKey from "component/common/assets/icon/selectKey.png";
import { useState } from "react";
import Header from "component/main/Header";

function Main() {
  const [isAbleKey, setIsAbleKey] = useState(false);

  return (
    <StyledRoot url={mainBackground} isAbleKey={isAbleKey}>
      <Header />
      <UnLockContainer isAbleKey={isAbleKey} />
      <StyledWireBackground url={wireBackgroundImg} />
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: ${(props) =>
    props.isAbleKey ? `url(${selectKey}) 45 45, pointer` : "default"};
`;

const StyledWireBackground = styled.div`
  position: absolute;
  background-image: ${(props) => `url(${props.url})`};
  width: 100%;
  height: 58%;
  bottom: 0;
`;
