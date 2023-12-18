import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/screens/badge_screen.dart';
import 'package:boonglunteer_view/screens/charity_screen.dart';
import 'package:boonglunteer_view/screens/home_screen.dart';
import 'package:boonglunteer_view/screens/profile_screen.dart';
import 'package:boonglunteer_view/screens/start_screen.dart';
import 'package:boonglunteer_view/widgets/bottom_container.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      bottom: false,
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: '사랑의 붕어빵',
        theme: ThemeData(
          scaffoldBackgroundColor: mainColor,
          fontFamily: 'basicFont',
        ),
        initialRoute: '/',
        routes: {
          '/': (context) => const StartScreen(),
          '/home': (context) => const BottomContainer(),
          '/charity': (context) => const CharityScreen(),
          '/badge': (context) => const BadgeScreen(),
          '/profile': (context) => const ProfileScreen(),
        },
      ),
    );
  }
}
