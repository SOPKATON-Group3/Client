import styled from "styled-components";
import MorningBackground from "component/common/assets/images/mainbackground_morning.svg";
import DayTimeBackground from "component/common/assets/images/mainbackground_daytime.svg";
import NightBackground from "component/common/assets/images/mainbackground_night.svg";
import { useEffect, useState } from "react";
function Layout({ children }) {
  const [background, setBackground] = useState("");
  useEffect(() => {
    onChangeBackgroundByTime();
  }, []);

  const onChangeBackgroundByTime = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime <= 8) {
      //새벽
      setBackground(NightBackground);
    } else if (currentTime > 8 && currentTime <= 16) {
      //낮
      setBackground(MorningBackground);
    } else {
      //밤
      setBackground(DayTimeBackground);
    }
  };
  return (
    <StyledRoot url={background}>
      <StyledMain>{children}</StyledMain>
    </StyledRoot>
  );
}

export default Layout;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.url})`};

  position: absolute;
  top: 0;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;
