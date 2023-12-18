import 'package:boonglunteer_view/constants/colors.dart';
import 'package:boonglunteer_view/screens/expalin_screen.dart';
import 'package:flutter/material.dart';

class CharityWidget extends StatelessWidget {
  final String charityName;
  const CharityWidget({super.key, required this.charityName});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        InkWell(
          onTap: () {
            Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) =>
                        ExplainScreen(charityName: charityName)));
          },
          child: Padding(
            padding: const EdgeInsets.all(0.0),
            child: Container(
              width: 170,
              height: 175.46,
              decoration: ShapeDecoration(
                color: Colors.white.withOpacity(0.4000000059604645),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: IconButton(
                onPressed: null,
                icon: Image.asset('assets/images/charity_children.png'),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(
            vertical: 10,
          ),
          child: Text(
            charityName,
            style: const TextStyle(
              color: fontColor,
              fontWeight: FontWeight.w600,
              fontSize: 14,
            ),
          ),
        ),
      ],
    );
  }
}
