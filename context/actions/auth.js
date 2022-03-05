import API from "../../helpers/api";
import { get } from "lodash";
import * as auth from "../../helpers/auth";

export const OTP_SENT_SUCCESS = "OTP_SENT_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

function errorRequest(err, dispatch) {
  let data = get(err, "response.data", null);
  data = !!data ? data : get(err, "response");
  data = !!data ? data : err;
  dispatch({
    type: "AUTH_FAILURE",
    payload: data,
  });
}

export function sendOtp(payload) {
  return (dispatch) => {
    try {
      API.apiPost("sentOtp", payload)
        .then((response) => {
          dispatch({ type: OTP_SENT_SUCCESS });
        })
        .catch((err) => {});
    } catch (err) {}
  };
}

export function verifyOtp(payload) {
  return (dispatch) => {
    try {
      API.apiPost("verifyOtp", payload)
        .then((response) => {
          if (response.data?.token) {
            auth.login(response.data.token);
            dispatch({ type: LOGIN_SUCCESS });
          }
        })
        .catch((err) => {
          //   errorRequest(err, dispatch);
        });
    } catch (err) {
      //   errorRequest(err, dispatch);
    }
  };
}

export function logout() {
  return (dispatch) => {
    try {
      API.apiPost("logout", {});
    } catch (err) {
      errorRequest(err, dispatch);
    }
  };
}
