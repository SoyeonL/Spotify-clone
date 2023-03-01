import React, { useEffect, useState } from "react";
import axios from "axios";

const useAuth = ({ code }) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [code]);

  return <div></div>;
};

export default useAuth;
