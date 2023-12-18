import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/widgets/badge_widget.dart';
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
            Text(
              '앞으로 또 어떤 붕어빵을 획득할 수 있을까요?',
              style: TextStyle(
                color: fontColor,
                fontSize: 18,
              ),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(30, 40, 30, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  BadgeWidget(badgeName: '뱃지1', image: 'badge1'),
                  BadgeWidget(badgeName: '뱃지2', image: 'badge2'),
                  BadgeWidget(badgeName: '뱃지3', image: 'badge3'),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(30, 20, 30, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  BadgeWidget(badgeName: '뱃지4', image: 'badge4'),
                  BadgeWidget(badgeName: '뱃지5', image: 'badge5'),
                  BadgeWidget(badgeName: '뱃지6', image: 'badge6'),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(30, 20, 30, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  BadgeWidget(badgeName: '뱃지7', image: 'badge7'),
                  BadgeWidget(badgeName: '뱃지8', image: 'badge8'),
                  BadgeWidget(badgeName: '뱃지9', image: 'badge9'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
