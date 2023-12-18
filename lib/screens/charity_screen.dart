import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';

class CharityScreen extends StatelessWidget {
  const CharityScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(80),
          child: Column(
            children: [
              const Text('charity'),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('charity'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
