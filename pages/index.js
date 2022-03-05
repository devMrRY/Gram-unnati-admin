import React from "react";
import Router from "next/router";
import Login from "../components/Login";
import { useAuthContext } from "../context/providers/auth";

export default function Index() {
  const [AuthData] = useAuthContext();
  React.useEffect(() => {
    if (AuthData.isAuth) {
      Router.push("/admin/dashboard");
    }
  });

  return <Login />;
}
