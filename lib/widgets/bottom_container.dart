import 'package:boonglunteer_view/screens/badge_screen.dart';
import 'package:boonglunteer_view/screens/charity_screen.dart';
import 'package:boonglunteer_view/screens/home_screen.dart';
import 'package:boonglunteer_view/screens/profile_screen.dart';
import 'package:boonglunteer_view/widgets/custom_bottombar.dart';
import 'package:flutter/material.dart';

class BottomContainer extends StatefulWidget {
  const BottomContainer({Key? key}) : super(key: key);

  @override
  BottomContainerState createState() => BottomContainerState();
}

class BottomContainerState extends State<BottomContainer> {
  int selectedIndex = 0;

  final List<Widget> pages = [
    const HomeScreen(),
    const CharityScreen(),
    const BadgeScreen(),
    const ProfileScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: selectedIndex,
        children: pages,
      ),
      bottomNavigationBar: CustomBottomBar(
        selectedIndex: selectedIndex,
        onItemTapped: _onItemTapped,
      ),
    );
  }
}
