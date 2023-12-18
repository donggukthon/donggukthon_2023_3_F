import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/screens/history_screen.dart';
import 'package:boonglunteer_view/widgets/button_widget.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 80,
              horizontal: 40,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                LinearProgressIndicator(
                  value: 0.5,
                  backgroundColor: const Color(0xFFd9D1C2),
                  valueColor: const AlwaysStoppedAnimation<Color>(Colors.red),
                  minHeight: 11,
                  borderRadius: BorderRadius.circular(32),
                ),
                const SizedBox(height: 49),
                const Text(
                  '2일차',
                  style: TextStyle(
                    fontFamily: 'titleFont',
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                    color: titleColor,
                  ),
                ),
                const Text(
                  '초록우산재단',
                  style: TextStyle(
                    fontSize: 18,
                    color: titleColor,
                  ),
                ),
                const SizedBox(
                  height: 200,
                ),
                const Text(
                  '총 기부 금액',
                  style: TextStyle(
                    color: titleColor,
                    fontSize: 20,
                  ),
                ),
                const Text(
                  '1,290원',
                  style: TextStyle(
                    fontFamily: 'titleFont',
                    color: titleColor,
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.only(top: 40.0),
                  child: ButtonWidget(
                    widgetText: '기부 내역 조회',
                    destination: HistoryScreen(),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
