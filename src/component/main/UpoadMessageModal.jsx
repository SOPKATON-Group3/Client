import styled from "styled-components";
import { useState } from "react";
import { postNewMessage } from "apis/main.api";

function MessageFeedModal({ hidden, hideModal }) {
  const [body, setBody] = useState({
    nickname: "",
    contents: "",
  });
  const onClickUploadButton = async () => {
    const response = await postNewMessage();
    console.log(response);
  };
  return (
    <>
      {!hidden && (
        <>
          <StyledModalWrapper onClick={hideModal}></StyledModalWrapper>
          <StyledModalContentWrapper>
            <StyledNickName>솝커톤랄라라가나다라</StyledNickName>
            <StyledModalContentInput value={body.contents} />
          </StyledModalContentWrapper>
          <StyledUploadButton onClick={onClickUploadButton}>
            업로드하기
          </StyledUploadButton>
        </>
      )}
    </>
  );
}

const StyledModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;

  width: 81.5rem;
  height: 53rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background: #f2f2f2;
  border-radius: 41px;
  padding: 15px;
  z-index: 1;
`;

const CommonFontStyle = styled.strong`
  width: 67.9rem;
  font-weight: 400;
  line-height: 160%;
`;

const StyledNickName = styled(CommonFontStyle)`
  font-size: 22px;
`;

const StyledModalContentInput = styled(CommonFontStyle)`
  font-size: 25px;
`;
const StyledUploadButton = styled.button`
  width: 32.1rem;
  height: 6.7rem;
  background: #d9d9d9;
  border-radius: 17px;
`;
export default MessageFeedModal;
