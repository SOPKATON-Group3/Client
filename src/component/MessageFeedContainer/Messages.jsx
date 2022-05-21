import { useState } from "react";
import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";
import MessageFeedModal from "./MessageFeedModal";

function Messages() {
  const [messageList, setMessageList] = useState([
    {
      id: 0,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor 세상의 모서리 구부정하게",
    },
    {
      id: 1,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor",
    },
    {
      id: 2,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor 세상의 모서리 구부정하게",
    },
    {
      id: 3,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor",
    },
    {
      id: 4,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor",
    },
    {
      id: 5,
      nickname: "솝커톤랄라라가나다라",
      description:
        "세상의 모서리 구부정하게 커버린 골칫거리 Outsider 걸음걸이 옷차림 이어폰 너머 Play list 음악까지 다 Minor",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const onClickMessage = () => {
    setShowModal(true);
  };

  return (
    <StyledRoot>
      <MessageFeedModal
        hidden={!showModal}
        hideModal={() => {
          setShowModal(false);
        }}
      />
      {messageList.map((message) => (
        <StyledMessageWrapper key={message.id} onClick={onClickMessage}>
          <StUnLockImage src={UnLock} />
          <StyledMessageContainer>
            <StyledTitle>{message.nickname}</StyledTitle>
            <StyledDescription>{message.description}</StyledDescription>
          </StyledMessageContainer>
        </StyledMessageWrapper>
      ))}
    </StyledRoot>
  );
}
const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.4rem 2.6rem;
  flex-wrap: wrap;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMessageWrapper = styled(FlexColumn)`
  position: relative;
  width: 46.2rem;
  height: 30rem;
  background: #fafafa;
  border: 0.15rem solid #a3a3a3;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 2.7rem;
`;

const StUnLockImage = styled.img`
  position: absolute;
  top: -4rem;
  width: 6.284rem;
`;

const StyledMessageContainer = styled(FlexColumn)`
  gap: 3.1rem;
`;

const CommonFontStyle = styled.p`
  font-size: 22px;
  line-height: 160%;
`;

const StyledTitle = styled(CommonFontStyle)`
  font-weight: 600;
`;
const StyledDescription = styled(CommonFontStyle)`
  font-weight: 400;
  width: 37.8rem;
  color: #636363;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export default Messages;
