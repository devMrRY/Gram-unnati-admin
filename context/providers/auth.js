import { createContext, useContext, useReducer } from "react";
import { LOGIN_SUCCESS, OTP_SENT_SUCCESS } from "../actions/auth";

const AuthContext = createContext();

const initialState = {
  isAuth: false,
  otpSent: false,
  userData: null,
};

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
      case OTP_SENT_SUCCESS:
      return {
        ...state,
        otpSent: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(AuthReducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
