import styled from "styled-components";
import key from "component/common/assets/images/key.png";

function GetKeyModal() {
  return (
    <>
      <StyledRoot>
        <StyledImage src={key} alt="열쇠" />
        <StyledText>
          <p>누군가의 일상을 열어볼 수 있는</p>
          <p>열쇠를 획득했어요!</p>
        </StyledText>
      </StyledRoot>
    </>
  );
}

export default GetKeyModal;

const StyledRoot = styled.div`
  width: 192rem;
  height: 108rem;
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledText = styled.div`
  color: white;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;

  & > p {
    margin-bottom: 1rem;
  }
`;
