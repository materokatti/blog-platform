import React from "react";
import {GoogleLogin} from "react-google-login";

const App: React.FC = () => {
  const handleLogin = (googleData: any) => {
    fetch("http://localhost:3000/auth/google/callback", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 여기서 받은 데이터로 작업 수행
        console.log(data);
      });
  };

  return (
    <div className='App'>
      <h1>Google Login</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
        buttonText='Log in with Google'
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default App;
