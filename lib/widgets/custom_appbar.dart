import 'package:boonglunteer_view/constants/colors.dart';
import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  const CustomAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: mainColor,
      leading: IconButton(
        icon: const Padding(
          padding: EdgeInsets.symmetric(vertical: 0, horizontal: 0),
          child: Icon(
            Icons.arrow_back_ios_new,
            color: Color(0xFF888888),
          ),
        ),
        onPressed: () {
          Navigator.pop(context);
        },
      ),
    );
  }

  @override
  Size get preferredSize =>
      const Size.fromHeight(kToolbarHeight); // Define the preferred size
}
