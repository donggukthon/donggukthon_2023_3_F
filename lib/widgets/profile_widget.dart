import 'package:flutter/material.dart';

class ProfileWidget extends StatelessWidget {
  final String widgetText;
  const ProfileWidget({super.key, required this.widgetText});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 20, 0, 10),
      child: Text(
        widgetText,
        style: TextStyle(
          color: Colors.black.withOpacity(0.44999998807907104),
          fontSize: 16,
        ),
      ),
    );
  }
}
