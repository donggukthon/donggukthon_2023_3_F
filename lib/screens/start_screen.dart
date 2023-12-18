import 'package:flutter/material.dart';
import 'package:boonglunteer_view/constants/colors.dart';
import 'package:get/utils.dart';
import 'package:boonglunteer_view/widgets/start_description.dart';

class StartScreen extends StatefulWidget {
  const StartScreen({super.key});

  @override
  State<StartScreen> createState() => _StartScreenState();
}

class _StartScreenState extends State<StartScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: mainColor,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: const EdgeInsets.fromLTRB(0, 10, 0, 0),
            child: Image.asset(
              'assets/images/present.png',
              height: 180,
            ),
          ),
          SizedBox(height: 20),
          Text(
            'Create bread\nand donate !',
            style: TextStyle(
              color: Colors.black,
              fontFamily: 'commentFont',
              fontSize: 30,
            )
          ),
          SizedBox(height: 20),
          const StartDescriptionWidget(),
          SizedBox(height: 20),
          Container(
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: redButtonColor,
                padding: const EdgeInsets.symmetric(
                  vertical: 16,
                  horizontal: 100,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
              ),
              onPressed: () {},
              child: const Text(
                '시작하기',
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ],
      )
    );
  }
}