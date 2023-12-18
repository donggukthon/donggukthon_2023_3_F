import 'package:flutter/material.dart';
import 'package:boonglunteer_view/constants/colors.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class StartDescriptionWidget extends StatefulWidget {
  const StartDescriptionWidget({super.key});

  @override
  State<StartDescriptionWidget> createState() => _StartDescriptionWidgetState();
}

class _StartDescriptionWidgetState extends State<StartDescriptionWidget> {
  var controller;
  @override
  void initState() {
    controller = PageController(
      viewportFraction: 0.8,
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return SizedBox(
      width: double.infinity,
      height: 220,
      child: Column(
        children: <Widget>[
          SingleChildScrollView(
            controller: controller,
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                const SizedBox(width: 55),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 200,
                      width: 300,
                      decoration: BoxDecoration(
                        color: whiteColor.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(20)
                      ),
                    ),
                    Positioned(
                      child: const Align(
                        alignment: Alignment.center,
                        child: Text(
                          '기부가 하고 싶은데 방법을 모르겠고,,\n기부를 하는 과정이 너무 번거로우셨나요?\n‘사랑의 붕어빵’을 통해 여러분의 마음을\n쉽고 간단하게 전달해보세요!',
                          style: TextStyle(
                            color: fontColor,
                            fontFamily: 'titleFont',
                            fontSize: 13, 
                            fontWeight: FontWeight.w300,
                          )
                        ),
                      ),
                    ),
                  ]
                ),
                const SizedBox(width: 20),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 200,
                      width: 300,
                      decoration: BoxDecoration(
                        color: whiteColor.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(20)
                      ),
                    ),
                    Positioned(
                      left: 10,
                      right: 10,
                      child: const Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Q. 사랑의 붕어빵은 어떤 서비스인가요?\n\n기부 금액이 쌓임에 따라 붕어빵이 만들어지게\n됩니다. 3000원이 모이면 붕어빵이 완성되고\n여러분이 원하는 단체에 기부를 할 수 있습니다.',
                          style: TextStyle(
                            color: fontColor,
                            fontFamily: 'titleFont',
                            fontSize: 13, 
                            fontWeight: FontWeight.w300,
                          )
                        ),
                      ),
                    ),
                  ]
                ),
                const SizedBox(width: 20),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 200,
                      width: 300,
                      decoration: BoxDecoration(
                        color: whiteColor.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(20)
                      ),
                    ),
                    Positioned(
                      left: 10,
                      right: 10,
                      child: const Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Q. 사랑의 붕어빵의 특징은 뭔가요?\n\n기부를 할 때마다 랜덤의 붕어빵이 만들어지게\n됩니다.기부 금액에 따라 붕어빵은 점점\n성장하게 되고, 성장한 붕어빵을 기부하게 되면\n배지로 남게 됩니다. 여러분의 마음을\n전달하고 아기자기한 붕어빵을 모아보세요! ',
                          style: TextStyle(
                            color: fontColor,
                            fontFamily: 'titleFont',
                            fontSize: 13, 
                            fontWeight: FontWeight.w300,
                          )
                        ),
                      ),
                    ),
                  ]
                ),
                const SizedBox(width: 20),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 200,
                      width: 300,
                      decoration: BoxDecoration(
                        color: whiteColor.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(20)
                      ),
                    ),
                    Positioned(
                      left: 10,
                      right: 10,
                      child: const Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Q. 꼭 3000원을 모아야 기부가 가능하나요?\n\n아닙니다. 기부는 3000원보다\n적어도, 많아도 가능합니다!\n하지만 3000원이 모여야만 배지를 얻을 수\n있다는 점 기억해주세요!',
                          style: TextStyle(
                            color: fontColor,
                            fontFamily: 'titleFont',
                            fontSize: 13, 
                            fontWeight: FontWeight.w300,
                          )
                        ),
                      ),
                    ),
                  ]
                ),
                const SizedBox(width: 20),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 200,
                      width: 300,
                      decoration: BoxDecoration(
                        color: whiteColor.withOpacity(0.5),
                        borderRadius: BorderRadius.circular(20)
                      ),
                    ),
                    Positioned(
                      left: 10,
                      right: 10,
                      child: const Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Q. 어떤 단체에 기부가 되나요?\n\n기부단체는 여러분이 직접 선택 가능합니다.\n붕어빵을 전달할 때, 난민, 독거노인, 저소득층,\n어린이 중 선택할 수 있게 됩니다.',
                          style: TextStyle(
                            color: fontColor,
                            fontFamily: 'titleFont',
                            fontSize: 13, 
                            fontWeight: FontWeight.w300,
                          )
                        ),
                      ),
                    ),
                  ]
                ),
                const SizedBox(width: 90),
              ],
            ),
          ),
          const SizedBox(height: 15),
          Flexible(
            child: SmoothPageIndicator(
              controller: controller,
              count: 5,
              effect: const WormEffect(
                activeDotColor: redButtonColor,
                dotColor: iconButtonColor,
                dotWidth: 6.0,
                radius: 3.0,
                dotHeight: 6.0,
                paintStyle: PaintingStyle.stroke,
                strokeWidth: 1.0,
              ),
            ),
          )
        ]
      )
    );  
  }
}