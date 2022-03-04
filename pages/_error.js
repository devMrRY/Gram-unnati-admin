import React from "react";
import Router from "next/router";

export default function _error() {
  const handleBackToHome = () => {
    Router.push("/admin/dashboard");
  }

  return <div>
    <button onClick={handleBackToHome}>Back to Home</button>
  </div>;
}
