import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';

import '../constants/colors.dart';

class ExplainScreen extends StatelessWidget {
  final String charityName;

  const ExplainScreen({Key? key, required this.charityName}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    int charityTotalAmount = 129;
    return Scaffold(
      appBar: const CustomAppBar(),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 20, 0, 35),
                child: Text(
                  charityName,
                  style: const TextStyle(
                    color: titleColor,
                    fontSize: 28,
                    fontFamily: 'titleFont',
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset('assets/images/basic_fishbread.png'),
                  Padding(
                    padding: const EdgeInsets.only(left: 10.0),
                    child: Text(
                      '총 $charityTotalAmount마리의 붕어빵이 기부되었어요!',
                      style: const TextStyle(
                        color: fontColor,
                        fontSize: 18,
                      ),
                    ),
                  ),
                ],
              ),
              Padding(
                padding: const EdgeInsets.only(top: 50.0),
                child: Text(
                  '모인 붕어빵은 여러분의 이름으로 $charityName 단체에 기부됩니다.',
                  style: TextStyle(
                    color: Colors.black.withOpacity(0.44999998807907104),
                    fontSize: 18,
                  ),
                ),
              ),
              Text(
                '여러분의 따뜻한 마음을 전달해보세요!',
                style: TextStyle(
                  color: Colors.black.withOpacity(0.44999998807907104),
                  fontSize: 18,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
