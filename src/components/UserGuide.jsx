import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';

function UserGuideWidget() {
  //4개 안내 섹션에 대한 각각의 ref 생성
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const [activeRef, setActiveRef] = useState(null);

  const scrollToContent = (contentRef) => {
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("작동하지 않습니다");
    }
  };

  useEffect(() => {
    scrollToContent(activeRef);
  }, [activeRef]);

  const detail = [
    "기부가 하고 싶은데 방법을 모르겠고,,\n기부를 하는 과정이 너무 번거로우셨나요?\n♥사랑의 붕어빵♥을 통해\n여러분의 마음을 쉽고 간단하게 전달해보세요!",
    "Q. ♥사랑의 붕어빵♥은 어떤 서비스 인가요?\n\n기부 금액이 쌓이면서 붕어빵이 만들어지게 됩니다. 3000원이 모이면 붕어빵이 완성되고\n여러분이 원하는 단체에 기부를 할 수 있습니다.",
    "Q. ♥사랑의 붕어빵♥의 특징은 뭔가요?\n\n여러분이 기부를 하실때마다 랜덤의 붕어빵이 만들어지게 됩니다. 기부 금액에 따라 붕어빵은 점점 성장하게 되고, 성장한 붕어빵을 기부하게 되면 뱃지로 남게 됩니다. 여러분의 마음을 전달하고 아기자기한 붕어빵을 모아보세요! ",
    "Q. 어떤 단체에 기부가 되나요?\n\n기부단체는 여러분이 직접 선택가능합니다.\n붕어빵을 전달할 때 난민, 독거노인, 저소득층, 어린이 중 선택할 수 있게 됩니다."
  ]
  
  return (
    <>
    <TranslucentBox>
      <ContentsContainer>{detail[0]}</ContentsContainer>
    </TranslucentBox>
    <TranslucentBox>
      <ContentsContainer>{detail[1]}</ContentsContainer>
    </TranslucentBox>
    <TranslucentBox>
      <ContentsContainer>{detail[2]}</ContentsContainer>
    </TranslucentBox>
    <TranslucentBox>
      <ContentsContainer>{detail[3]}</ContentsContainer>
    </TranslucentBox>
    </>
  );
}

const TranslucentBox = styled.div`
  margin: 0 20px;
  width: 230px;
  height: 230px;
  transform: translateX(0);
  background-color: rgba(255, 255, 255, 0.60);
  border-radius: 1rem 1rem 1rem 1rem;
`;

const ContentsContainer = styled.div`
  overflow: auto;
  width: 230px;
  height: 230px;
  margin: 0 10px;
  font-family: 'basicFont';
  font-size: 14px; 
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UserGuideWidget;