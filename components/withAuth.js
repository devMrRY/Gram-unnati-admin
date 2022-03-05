import Router from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "../context/providers/auth";
import Login from "./Login";

const WithAuth = ({ children, isAuthRequired }) => {
    const [AuthData] = useAuthContext();
    useEffect(() => {
        if(isAuthRequired && !AuthData.isAuth){
            Router.push('/');
        }
    }, [])

    return (
        <>{(isAuthRequired && AuthData.isAuth || !isAuthRequired) ? children : <Login />}</>
    )
}

export default WithAuth;