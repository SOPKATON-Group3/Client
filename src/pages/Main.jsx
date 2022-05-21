import styled from "styled-components";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";
import mainBackgroundImg from "component/common/assets/images/mainBackgroundImg.svg";
import wireBackgroundImg, {
  ReactComponent as Wire,
} from "component/common/assets/images/wire.svg";
import UnLockContainer from "component/main/unLockContainer";

function Main() {
  return (
    <StyledRoot url={mainBackgroundImg}>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <UnLockContainer />
      <StyledWireBackground url={wireBackgroundImg} />
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
