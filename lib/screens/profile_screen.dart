import 'package:boonglunteer_view/widgets/button_widget.dart';
import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:boonglunteer_view/widgets/profile_widget.dart';
import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    String userName = '김혜연';
    String userEmail = 'hyeyeonismm@gmail.com';

    return Scaffold(
      appBar: const CustomAppBar(),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const ProfileWidget(widgetText: '로그인계정'),
              Container(
                height: 105,
                decoration: ShapeDecoration(
                  color: Colors.white.withOpacity(0.6000000238418579),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(31),
                  ),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Row(
                    children: [
                      Image.asset('assets/images/kakao_icon.png'),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
                            child: Text(
                              '$userName님',
                              style: const TextStyle(
                                color: Colors.black,
                                fontSize: 18,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(10, 0, 0, 0),
                            child: Text(
                              userEmail,
                              style: TextStyle(
                                color: Colors.black
                                    .withOpacity(0.44999998807907104),
                                fontSize: 14,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const ProfileWidget(widgetText: '계좌 정보 수정'),
              Container(
                height: 290,
                decoration: ShapeDecoration(
                  color: Colors.white.withOpacity(0.6000000238418579),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(31),
                  ),
                ),
                child: const Text(
                  '예금주명',
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
              const ProfileWidget(widgetText: '기부 정보 수정'),
              const Center(
                  child: ButtonWidget(widgetText: '수정하기', destination: null))
            ],
          ),
        ),
      ),
    );
  }
}
