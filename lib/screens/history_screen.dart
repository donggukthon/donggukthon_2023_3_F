import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    String userName = '김혜연';
    int totalDonateAmount = 10450;
    String formattedDonateAmount =
        NumberFormat('#,###', 'ko_KR').format(totalDonateAmount);

    return Scaffold(
      appBar: const CustomAppBar(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            const Padding(
              padding: EdgeInsets.fromLTRB(0, 20, 0, 35),
              child: Text(
                'History',
                style: TextStyle(
                  color: titleColor,
                  fontSize: 28,
                  fontFamily: 'titleFont',
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            Text('$userName님이 지금까지 전달한 마음이예요!',
                style: const TextStyle(
                  color: fontColor,
                  fontSize: 18,
                )),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 40),
              child: Text(
                '누적금액: $formattedDonateAmount원',
                style: const TextStyle(
                    color: titleColor,
                    fontSize: 24,
                    fontFamily: 'titleFont',
                    fontWeight: FontWeight.w600),
              ),
            ),
            const Padding(
              padding: EdgeInsets.fromLTRB(30, 45, 30, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[Text('내역설명')],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
