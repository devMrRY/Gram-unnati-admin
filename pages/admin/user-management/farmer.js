import React from "react";
import Router from "next/router";
import Admin from "layouts/Admin.js";

function Farmer() {
  const handleBackToHome = () => {
    Router.push("/admin/dashboard");
  }

  return <div>
    <button onClick={handleBackToHome}>Farmer</button>
  </div>;
}

Farmer.layout = Admin;

export default Farmer