import styled from "styled-components";
import { useState } from "react";
import { postNewMessage } from "apis/main.api";
import { default as Close } from "component/common/assets/icon/close.svg";

export default function UploadMessageModal({
  hidden,
  hideModal,
  name,
  setIsAbleKey,
}) {
  const [body, setBody] = useState({
    nickname: "솝커톤",
    contents: "",
  });

  const onClickUploadButton = async () => {
    const response = await postNewMessage(body);
    console.log(response);
    hideModal();
    setIsAbleKey(true);
  };
  return (
    <>
      {!hidden && (
        <StyledRoot>
          <StyledModalWrapper onClick={hideModal}></StyledModalWrapper>
          <StyledModalContentWrapper>
            <StyledUpperWrapper>
              <StyledNickName>{name}</StyledNickName>
              <StyledCloseButton onClick={hideModal}>
                <img src={Close} />
              </StyledCloseButton>
            </StyledUpperWrapper>
            <StyledModalContentInput
              type="text"
              value={body.contents}
              onChange={(e) =>
                setBody({ nickname: body.nickname, contents: e.target.value })
              }
              maxLength="300"
              placeholder="즐거웠던 기억을 작성해주세요."
            />
            <StyledMaxLengthText>최대 300자</StyledMaxLengthText>
            <StyledUploadButton onClick={onClickUploadButton}>
              완료
            </StyledUploadButton>
          </StyledModalContentWrapper>
        </StyledRoot>
      )}
    </>
  );
}
const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  z-index: 10;
`;

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
  background: #f9f9f9;
  border-radius: 2.3rem;
  z-index: 1;
`;

const StyledUpperWrapper = styled.div`
  display: flex;
`;
const StyledNickName = styled.strong`
  width: 67.9rem;
  line-height: 160%;
  font-size: 22px;
  font-weight: 600;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
`;

const StyledModalContentInput = styled.textarea`
  text-align: left;
  vertical-align: top;
  border: none;
  line-height: 160%;
  width: 70.7rem;
  height: 34.8rem;
  font-size: 25px;
  background: #eceef0;
  border-radius: 17px;
  color: #000;
  padding: 2.4rem 0 0 2.6rem;
  &::placeholder {
    color: #a8afb9;
    height: 34.8rem;
  }
  &:focus {
    outline: none;
  }
`;

const StyledMaxLengthText = styled.p`
  position: absolute;
  bottom: 7rem;
  right: 7rem;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #8f8f8f;
`;
const StyledUploadButton = styled.button`
  position: absolute;
  bottom: -10rem;
  border: none;
  width: 12.6rem;
  height: 5.2rem;
  background: #ffffff;
  border-radius: 27.1304px;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
`;
