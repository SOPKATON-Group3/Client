import { useState, useEffect } from "react";
import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";
import MessageFeedModal from "./MessageFeedModal";
import { getMessageList } from "apis/detail.api.js";

function Messages() {
  const [messageList, setMessageList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = async () => {
    const { data } = await getMessageList();
    setMessageList(data.data);
  };

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
            <StyledDescription>{message.contents}</StyledDescription>
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
