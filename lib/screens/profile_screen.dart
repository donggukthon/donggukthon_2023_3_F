import 'package:boonglunteer_view/widgets/custom_appbar.dart';
import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(80),
          child: Column(
            children: [
              const Text('profile'),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('profile'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
