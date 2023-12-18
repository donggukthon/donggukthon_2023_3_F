import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/widgets/charity_widget.dart';
import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';

class BadgeScreen extends StatelessWidget {
  const BadgeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      appBar: CustomAppBar(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.fromLTRB(0, 20, 0, 35),
              child: Text(
                'Badge',
                style: TextStyle(
                  color: titleColor,
                  fontSize: 28,
                  fontFamily: 'titleFont',
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            Text('지금까지 기부한 붕어빵을 통해 획득한 뱃지예요!',
                style: TextStyle(
                  color: fontColor,
                  fontSize: 18,
                )),
            Text('각각의 뱃지를 터치하면 상세한 설명을 확인할 수 있어요.',
                style: TextStyle(
                  color: fontColor,
                  fontSize: 18,
                )),
            Text('앞으로 또 어떤 붕어빵을 획득할 수 있을까요?',
                style: TextStyle(
                  color: fontColor,
                  fontSize: 18,
                )),
            Padding(
              padding: EdgeInsets.fromLTRB(30, 45, 30, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  CharityWidget(charityName: '어린이'),
                  CharityWidget(charityName: '독거노인'),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(30, 15, 30, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  CharityWidget(charityName: '난민'),
                  CharityWidget(charityName: '저소득층'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
