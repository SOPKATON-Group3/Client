import styled from "styled-components";
import UnLockContainer from "component/main/unLockContainer";
import selectKey from "component/common/assets/icon/selectKey.png";
import { useState } from "react";
import Header from "component/main/Header";

function Main() {
  const [isAbleKey, setIsAbleKey] = useState(false);

  return (
    <StyledRoot isAbleKey={isAbleKey}>
      <Header />
      <UnLockContainer isAbleKey={isAbleKey} />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: ${(props) =>
    props.isAbleKey ? `url(${selectKey}) 45 45, pointer` : "default"};
`;

export default Main;
