import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/widgets/charity_widget.dart';
import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';

class CharityScreen extends StatelessWidget {
  const CharityScreen({super.key});

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
                'Charity',
                style: TextStyle(
                  color: titleColor,
                  fontSize: 28,
                  fontFamily: 'titleFont',
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            Text('마음을 나눌 수 있는 단체들',
                style: TextStyle(
                  color: fontColor,
                  fontSize: 18,
                )),
            Text('단체를 클릭하여 각 단체별 누적 기부 금액을 확인하세요!',
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
