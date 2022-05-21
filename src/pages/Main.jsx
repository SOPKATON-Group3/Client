import styled from "styled-components";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";
import mainBackgroundImg from "component/common/assets/images/mainBackgroundImg.svg";
import wire from "component/common/assets/images/wire.svg";

function Main() {
  return (
    <StyledRoot>
      <Logo />
      <img src={wire} alt="" />
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.div`
  background-image: ${mainBackgroundImg};
`;
