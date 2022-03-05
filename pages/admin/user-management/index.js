import React, { useEffect } from "react";
import Router from "next/router";

function UserManagement() {
  useEffect(() => {
    Router.push('/admin/user-management/farmer');
  }, [])

  return <div />
}

export default UserManagement;
