import { useState, useEffect } from "react";
import styled from "styled-components";
import { default as UnLock } from "component/common/assets/images/unlock.svg";
import { default as UnLockWhite } from "component/common/assets/images/unlock_white.svg";
import { default as UnLockBlue } from "component/common/assets/images/unlock_blue.svg";
import { default as UnLockYellow } from "component/common/assets/images/unlock_yellow.svg";
import { default as UnLockOrange } from "component/common/assets/images/unlock_orange.svg";
import MessageFeedModal from "./MessageFeedModal";
import { getMessageList } from "apis/messageFeed.api.js";
import Header from "component/main/Header";

function Messages() {
  const [unlockList, setUnlockList] = useState([
    UnLock,
    UnLockWhite,
    UnLockBlue,
    UnLockYellow,
    UnLockOrange,
  ]);
  useEffect(() => {
    setUnlockList((prev) => prev.sort(() => Math.random() - 0.5));
  }, []);
  const [messageList, setMessageList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    nickname: "",
    contents: "",
  });

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = async () => {
    const { data } = await getMessageList();
    setMessageList(data.data);
  };

  const onClickMessage = (nickname, contents) => {
    setModalInfo({ nickname: nickname, contents: contents });
    setShowModal(true);
  };

  return (
    <>
      <StyledRoot>
        <StyledHeader>
          <Header />
        </StyledHeader>
        <MessageFeedModal
          hidden={!showModal}
          hideModal={() => {
            setShowModal(false);
          }}
          modalInfo={modalInfo}
        />
        {messageList.map((message, index) => (
          <StyledMessageWrapper
            key={message.id}
            onClick={() => onClickMessage(message.nickname, message.contents)}
          >
            <StUnLockImage src={unlockList[index]} />
            <StyledMessageContainer>
              <StyledTitle>{message.nickname}</StyledTitle>
              <StyledDescription>{message.contents}</StyledDescription>
            </StyledMessageContainer>
          </StyledMessageWrapper>
        ))}
      </StyledRoot>
    </>
  );
}
const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.4rem 2.6rem;
  flex-wrap: wrap;
`;
const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  position: absolute;
  top: 4.9rem;
`;
const StyledDescription = styled(CommonFontStyle)`
  font-weight: 400;
  width: 37.8rem;
  text-align: center;
  color: #636363;
  position: absolute;
  top: 10.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export default Messages;
