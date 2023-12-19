import Carousel from 'react-material-ui-carousel';
import styled from "styled-components";

function UserGuideWidget() {
  const items = [
    {
      content: "기부가 하고 싶은데 방법을 모르겠고,,<br>기부를 하는 과정이 너무 번거로우셨나요?<br><strong style='color:red'>♥사랑의 붕어빵♥</strong>을 통해 여러분의 마음을 쉽고 간단하게 전달해보세요!",
    },
    {
      content: "Q. <strong style='color:red'>♥사랑의 붕어빵♥</strong>은 어떤 서비스 인가요?<br><br>기부 금액이 쌓임에 따라 붕어빵이 만들어지게 됩니다. 3000원이 모이면 붕어빵이 완성되고 여러분이 원하는 단체에 기부를 할 수 있습니다.",
    },
    {
      content: "Q. <strong style='color:red'>♥사랑의 붕어빵♥</strong>의 특징은 무엇인가요?<br><br>여러분이 기부를 하실때마다 랜덤의 붕어빵이 만들어지게 됩니다. 기부 금액에 따라 붕어빵은 점점 성장하게 되고, 성장한 붕어빵을 기부하게 되면 배지로 남게 됩니다.<br><br>여러분의 마음을 전달하고 아기자기한 붕어빵을 모아보세요 ! ",
    },
    {
      content: "Q. 꼭 3000원을 모아야 기부가 가능하나요?<br><br>아닙니다. 기부는 3000원보다 적어도 많아도 가능합니다! 하지만 <strong>3000원이 모여야만 배지를 얻을 수 있다는 점</strong> 기억해주세요 !",
    },
  ];

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={false}
        animation='slide'
        timeout={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
      >
        {items.map((item, i) => (
          <CarouselItem key={i}>
            <ContentContainer>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </ContentContainer>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 15px;
  font-family: 'lineFont';
`;

const ContentContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
`;

export default UserGuideWidget;