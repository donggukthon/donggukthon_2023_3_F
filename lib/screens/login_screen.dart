import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:boonglunteer_view/constants/colors.dart';
import 'package:kakao_flutter_sdk_user/kakao_flutter_sdk_user.dart';
import 'package:http/http.dart' as http;

enum LoginPlatform {
  kakao, // 로그인
  none, // 로그아웃
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  LoginPlatform _loginPlatform = LoginPlatform.none;

  void signInWithKakao() async {
    try {
      bool isInstalled = await isKakaoTalkInstalled();

      OAuthToken token = isInstalled ? await UserApi.instance.loginWithKakaoTalk() : await UserApi.instance.loginWithKakaoAccount();

      final url = Uri.https('kapi.kakao.com', '/v2/user/me');

      final response = await http.get(
        url,
        headers: {HttpHeaders.authorizationHeader: 'Bearer ${token.accessToken}'},
      );

      final profileInfo = json.decode(response.body);
      print(profileInfo.toString());

      setState(() {
        _loginPlatform = LoginPlatform.kakao;
        // 메인 화면으로 이동
        Navigator.of(context).push(MaterialPageRoute(
          builder: (BuildContext context) => const MyHomePage_after(),
        ));
      });
    } catch (error) {
      print('카카오톡으로 로그인 실패 $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: mainColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Positioned(
              top: 280,
              child: Container(
                child: Image.asset(
                  'assets/images/snowman_tree.png',
                  height: 230,
                ),
              ),
            ),
            Stack(
              alignment: Alignment.center,
              children: [
                Container(
                  height: 300,
                  width: 300,
                  decoration: BoxDecoration(
                    color: whiteColor.withOpacity(0.5),
                    borderRadius: BorderRadius.circular(20)
                  ),
                ),
                const Positioned(
                  top: 20,
                  child: Align(
                    child: Text(
                      'Create Your Account!',
                      style: TextStyle(
                        color: titleColor,
                        fontFamily: 'semiTitleBoldFont',
                        fontSize: 18, 
                      )
                    ),
                  ),
                ),
                
              ]
            ),
            Positioned(
              top: 600,
              child: Container(
                child: Image.asset(
                  'assets/images/gloves.png',
                  height: 230,
                ),
              ),
            ),
          ],
        ),
      )
    );
  }
}

Widget _loginButton(VoidCallback onTap) {
    return CupertinoButton(
        onPressed: onTap,
        child: Container(
          width: 240,
          height: 36,
          child: Image.asset('assets/images/kakaologin.png'),
        ));
  }