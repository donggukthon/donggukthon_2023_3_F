import 'package:boonglunteer_view/constants/colors.dart';
import 'package:flutter/material.dart';

class ButtonWidget extends StatelessWidget {
  final String widgetText;
  final Widget? destination;
  const ButtonWidget(
      {super.key, required this.widgetText, required this.destination});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 289,
      height: 52,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: redButtonColor,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
        ),
        onPressed: () {
          if (destination != null) {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => destination!,
              ),
            );
          }
        },
        child: Text(
          widgetText,
          style: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w700,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
