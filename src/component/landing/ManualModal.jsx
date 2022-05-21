import styled from "styled-components";
import manual1 from "component/common/assets/images/manual1.png";
import manual2 from "component/common/assets/images/manual2.png";
import { useNavigate } from "react-router-dom";

function ManualModal({ hidden, showModal, index }) {
  let navigate = useNavigate();

  const skipManual = () => {
    navigate("/main");
  };

  const manualList = [manual1, manual2];
  return (
    <>
      <StyledWrapper onClick={showModal}>
        {!hidden && index <= 2 && (
          <StyledModal image={manualList[index - 1]}></StyledModal>
        )}
        {!hidden && (
          <button type="button" onClick={skipManual}>
            SKIP
          </button>
        )}
      </StyledWrapper>
    </>
  );
}

export default ManualModal;

const StyledWrapper = styled.div`
  position: relative;

  & > button {
    z-index: 2;
    position: absolute;
    background-color: transparent;
    color: white;
    text-decoration: underline;
    font-size: 20px;
    border: none;
    cursor: pointer;
    bottom: -1000px;
    right: 60px;
  }
`;

const StyledModal = styled.div`
  background-image: url(${(props) => props.image});
  width: 192rem;
  height: 108rem;
  position: absolute;
  z-index: 1;
`;
