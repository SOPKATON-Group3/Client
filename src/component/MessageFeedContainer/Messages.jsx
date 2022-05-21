import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";

function Messages() {
  return (
    <StyledRoot>
      <StUnLockImage src={UnLock} />

      <StyledMessageContainer>
        <StyledTitle>솝커톤랄라라가나다라</StyledTitle>
        <StyledDescription>
          세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림
          이어폰 너머 Play list 음악까지 다 Minor ...
        </StyledDescription>
      </StyledMessageContainer>
    </StyledRoot>
  );
}
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRoot = styled(FlexColumn)`
  width: 46.2rem;
  height: 30rem;
  background: #fafafa;
  border: 0.15rem solid #a3a3a3;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 2.7rem;
`;

const StUnLockImage = styled.img`
  width: 6.284rem;
  height: 7.671rem;
  transform: translate(0, -3rem);
`;

const StyledMessageContainer = styled(FlexColumn)`
  padding: 3.129rem 4.2rem 5.9rem 3.129rem;
`;

const CommonFontStyle = styled.p`
  font-size: 22px;
  line-height: 160%;
`;

const StyledTitle = styled(CommonFontStyle)`
  font-weight: 500;
`;
const StyledDescription = styled(CommonFontStyle)`
  font-weight: 400;
`;
export default Messages;
