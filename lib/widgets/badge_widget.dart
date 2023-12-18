import 'package:boonglunteer_view/constants/colors.dart';
import 'package:flutter/material.dart';

class BadgeWidget extends StatelessWidget {
  final String badgeName;
  final String image;
  const BadgeWidget({super.key, required this.badgeName, required this.image});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 104,
      height: 120,
      padding: const EdgeInsets.all(14),
      decoration: ShapeDecoration(
        color: const Color(0xFFFCFCFC),
        shape: RoundedRectangleBorder(
          side: const BorderSide(width: 1, color: Color(0xFFEBECFD)),
          borderRadius: BorderRadius.circular(24),
        ),
        shadows: const [
          BoxShadow(
            color: Color(0x1E6E7486),
            blurRadius: 4,
            offset: Offset(0, 1),
            spreadRadius: 0,
          )
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            width: double.infinity,
            child: Text(
              badgeName,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: titleColor,
                fontFamily: 'titleFont',
                fontSize: 15,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          const SizedBox(height: 12),
          SizedBox(
            width: 80,
            height: 55,
            child: IconButton(
              onPressed: null,
              icon: Image.asset('assets/images/$image.png'),
            ),
          ),
        ],
      ),
    );
  }
}
