import React from "react";
import {Grid, Button, Img} from "@mui/material";
const GOOGLE_CLIENT_ID = "317787650438-melnlpu3vcr53d2l4oc2e22f7jg8ra98.apps.googleusercontent.com"; // Google OAuth 클라이언트 ID를 여기에 입력하세요.
const REDIRECT_URI = "http://localhost:8000/accounts/google/login/callback"; // 승인된 리디렉션 URI.

function GoogleLogin() {
  const onClickLogin = () => {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const params = {
      redirect_uri: REDIRECT_URI,
      client_id: GOOGLE_CLIENT_ID,
      access_type: "offline",
      response_type: "code",
      scope: "email profile",
    };
    const querystring = new URLSearchParams(params).toString();
    const authUrl = `${rootUrl}?${querystring}`;
    window.location = authUrl;
  };

  return (
    <div>
      <Button onClick={onClickLogin}>Login with Google</Button>
    </div>
  );
}

export default GoogleLogin;
