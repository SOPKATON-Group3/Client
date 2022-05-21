import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "component/common/assets/icon/logo.svg";
import UploadMessageModal from "./UploadMessageModal";

function Header({ name }) {
  const [showModal, setShowModal] = useState(false);
  const [isDayTime, setIsDayTime] = useState(false);
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 8 && currentTime <= 16) {
      console.log(currentTime);
      setIsDayTime(true);
    }
  }, []);

  return (
    <StyledRoot>
      <UploadMessageModal
        hidden={!showModal}
        hideModal={() => setShowModal(false)}
        name={name}
      />
      <StyledLogoWrapper>
        <StyledLogo isDayTime={isDayTime} />
      </StyledLogoWrapper>
      <StyledButtonWrapper isDayTime={isDayTime}>
        <button onClick={() => setShowModal(true)}>기록하기</button>
        <Line isDayTime={isDayTime} />
      </StyledButtonWrapper>
      <StyledButtonWrapper isDayTime={isDayTime}>
        <Link to="/letters">
          <button>둘러보기</button>
        </Link>
        <Line isDayTime={isDayTime} />
      </StyledButtonWrapper>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  padding-top: 5.7rem;
  align-items: center;
`;
const StyledLogo = styled(Logo)`
  & > path {
    fill: ${(props) => props.isDayTime && "#000"};
  }
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 7.7rem;
  margin-right: 6.2rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99;
  margin-right: 3.9rem;

  & button {
    font-size: 2.2rem;
    width: 10.1rem;
    height: 3.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
    color: ${({ isDayTime }) => isDayTime && `#000`};
  }
`;

const Line = styled.div`
  width: 10.2rem;
  height: 0.2rem;
  background-color: #fff;
  background-color: ${({ isDayTime }) => isDayTime && `#000`};
`;

export default Header;
