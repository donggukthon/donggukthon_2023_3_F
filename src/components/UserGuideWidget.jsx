import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
import fishbread from "../assets/images/santa_fishbread_brown.png";

function UserGuideWidget() {
  const items = [
    {
      content:
        "<div style={{marginBottom:0.3}}>기부가 하고 싶은데 방법을 모르겠고 ...</div><br>기부를 하는 과정이 번거로우셨나요?<br><strong style='color:red'>♥사랑의 붕어빵♥</strong>을 통해 여러분의 마음을 쉽고 간단하게 전달해보세요 !",
      image: fishbread,
    },
    {
      content:
        "Q. <strong style='color:red'>♥사랑의 붕어빵♥</strong>은 어떤 서비스인가요?<br><br>기부 금액이 쌓임에 따라 붕어빵이 만들어지게 됩니다. 3000원이 모이면 붕어빵이 완성되고 여러분께서 원하는 단체에 기부를 할 수 있습니다.",
      image: null,
    },
    {
      content:
        "Q. <strong style='color:red'>♥사랑의 붕어빵♥</strong>의 특징은 무엇인가요?<br><br>여러분이 기부를 하실때마다 랜덤의 붕어빵이 만들어지게 됩니다. 기부 금액에 따라 붕어빵은 점점 성장하게 되고, 성장한 붕어빵을 기부하게 되면 배지로 남게 됩니다.<br><br>여러분의 마음을 전달하고<br>아기자기한 붕어빵을 모아보세요 ! ",
      image: null,
    },
    {
      content:
        "Q. 꼭 3000원을 모아야 기부가 가능한가요?<br><br>아닙니다. 기부는 3000원보다 적어도 많아도 가능합니다.<br>하지만 <strong style='color:blue'>3000원이 모여야만 배지를 얻을 수 있다는 점</strong> 기억해주세요 !",
      image: null,
    },
    {
      content: "Q. 구체적인 기부 방식은 어떻게 되나요?<br><br>사랑의 붕어빵은 여러분이 선택한 요일 22시에 1000원 이하의 계좌 내 자투리 금액이 자동으로 모이게 됩니다.",
      image: null,
    },
    {
      content:
        "Q. 어떤 단체에 기부가 되나요?<br><br>기부단체는 여러분이 직접 선택가능합니다.<br>붕어빵을 전달할 때<br><strong style='color:blue'>난민, 독거 노인, 저소득층, 어린이</strong><br>중 선택할 수 있게 됩니다.",
      image: null,
    },
  ];

  return (
    <CarouselContainer>
      <Carousel autoPlay={false} animation="slide" timeout={500} navButtonsAlwaysVisible={false} navButtonsAlwaysInvisible={false}>
        {items.map((item, i) => (
          <CarouselItem key={i}>
            <ContentContainer>
              <TextContainer dangerouslySetInnerHTML={{__html: item.content}} />
              {item.image && <ImageContainer src={item.image} alt="Fishbread" />}
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
  height: 270px;
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  font-size: 14px;
  font-family: "lineFont";
`;

const ContentContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  margin-bottom: 10px;
`;

const ImageContainer = styled.img`
  width: 110px;
  /* max-width: 100%; */
  height: auto;
`;

export default UserGuideWidget;
