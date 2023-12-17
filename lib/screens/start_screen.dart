import 'package:flutter/material.dart';
import 'package:boonglunteer_view/constants/colors.dart';
import 'package:get/utils.dart';

class StartScreen extends StatelessWidget {
  const StartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: mainColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              margin: const EdgeInsets.fromLTRB(0, 10, 0, 0),
              child: Image.asset(
                'assets/images/present.png'
              ),
            ),
            SizedBox(height: 30),
            Text(
              'Create bread\nand donate !',
              style: TextStyle(
                color: Colors.black,
                fontFamily: 'commentFont',
                fontSize: 30,
              )
            ),
            SizedBox(height: 30),
            Stack(
              alignment: Alignment.center,
              children: [
                Container(
                  height: 250,
                  width: 350,
                  decoration: BoxDecoration(
                    color: whiteColor.withOpacity(0.6),
                    borderRadius: BorderRadius.circular(20)
                  ),
                ),
                Positioned(
                  top: 30,
                  child: const Align(
                    child: Text(
                      '기부가 하고 싶은데 방법을 모르겠고,,\n기부를 하는 과정이 너무 번거로우셨나요?\n‘사랑의 붕어빵’을 통해\n여러분의 마음을 쉽게 간단하게 전달해보세요!',
                      style: TextStyle(
                        color: fontColor,
                        fontFamily: 'titleFont',
                        fontSize: 15, 
                        fontWeight: FontWeight.w300,
                      )
                    ),
                  ),
                ),
                Positioned(
                  bottom: 10,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: redButtonColor,
                      padding: const EdgeInsets.symmetric(
                        vertical: 24,
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
              ]
            ),
          ],
        )
      )
    );
  }
}