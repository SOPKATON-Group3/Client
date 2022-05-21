import { useState, useEffect } from "react";
import styled from "styled-components";
import background from "component/common/assets/images/mainBackground.svg";
import lock from "component/common/assets/icon/lock.png";
import ManualModal from "./ManualModal";
import { useNavigate } from "react-router-dom";

function Information() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(1);
  let navigate = useNavigate();

  const onClickButton = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (index === 3) {
      navigate("/main");
    }
  }, [index]);

  return (
    <>
      <StyledRoot>
        <ManualModal
          hidden={!showModal}
          showModal={() => {
            setIndex((prev) => prev + 1);
          }}
          index={index}
        />
        {!showModal && (
          <StyledWrapper>
            <StyledInfo>
              <img src={lock} alt="자물쇠" />
              <img src={lock} alt="서비스명" />
              <div className="ment">
                <div className="bottom-gap">
                  <p>당신은 일상 속 즐거움을 흘려보내고 있지 않나요?</p>
                </div>
                <div className="bottom-gap">
                  <p>언락에서는 당신의 일상 속 즐거움을 쪽지로 작성하고,</p>
                  <p>열쇠로 다른 사람의 일상을 열어볼 수 있어요. </p>
                </div>
                <div>
                  <p>우리의 공간에 당신의 이야기를 더해주세요.</p>
                  <p>당신의 즐거움을 기다릴게요!</p>
                </div>
              </div>
              <p className="nickname">당신의 이름을 알려주세요</p>
              <span className="tmp">
                <input type="text" placeholder="닉네임을 입력하세요"></input>
              </span>
              <button type="button" onClick={onClickButton}>
                완료
              </button>
            </StyledInfo>
          </StyledWrapper>
        )}
      </StyledRoot>
    </>
  );
}

export default Information;

const StyledRoot = styled.div`
  width: 192rem;
  height: 108rem;
  background-image: url(${background});
  background-size: cover;
`;

const StyledWrapper = styled.div`
  width: 192rem;
  height: 108rem;
  background-color: rgba(0, 0, 0, 0.75);
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img:nth-child(1) {
    width: 4.138rem;
    height: 4.406rem;
    margin: 22.6rem 0 0 0;
  }

  img:nth-child(2) {
    width: 14.8rem;
    height: 6.3rem;
    margin-bottom: 1.9rem;
  }

  .ment {
    width: 114.4rem;
    color: white;
    font-size: 2.5rem;
    line-height: 4rem;
    text-align: center;
    margin-bottom: 8.5rem;
  }

  .bottom-gap {
    margin-bottom: 4.4rem;
  }

  .nickname {
    height: 4rem;
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1.6rem;
    font-weight: bold;
  }

  .tmp {
    position: relative;
  }

  .tmp::after {
    content: "10자 제한";
    position: absolute;
    right: 2rem;
    top: 2.1rem;

    color: #bcbcbc;
    font-size: 2.2rem;
    font-weight: bold;
  }

  input {
    width: 43.6rem;
    height: 6rem;
    border: 2px solid #ffffff;
    border-radius: 3.65rem;
    background-color: transparent;
    margin-bottom: 3.8rem;
    color: white;
    position: relative;
    font-size: 2.2rem;
    font-weight: bold;

    &::placeholder {
      padding: 4.1rem;
    }
  }

  & button {
    background-color: white;
    width: 13.9rem;
    height: 4.9rem;
    border-radius: 2.45rem;
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
