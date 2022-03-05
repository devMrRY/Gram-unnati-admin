import axios from "./apiHelper";
import config from "../../config";
import { get } from "lodash";
import * as auth from "../auth";
import { apiKeys } from "./apiKeys";

const getUrlByKey = (key) => {
  return apiKeys[key];
};
const APP_NAME = config.APP_NAME;

class API {
  // eslint-disable-next-line lines-around-comment
  /**
   * auth2 login api
   * @param {string} url String
   * @param {object} payload Object
   * @param {object} action Object e.g {type: 'AUTH', dispatch: function(){} }
   * @returns {Promise<void>} void
   */

  static apiGet = async (key, args) => {
    if (typeof args === "string") {
      return axios.get(getUrlByKey(key) + args, {
        withCredentials: false,
      });
    } else {
      return axios.get(getUrlByKey(key), {
        data: args,
        withCredentials: false,
      });
    }
  };

  static apiGetByKey = async (key, args, query) => {
    if (typeof args === "string") {
      return axios.get(getUrlByKey(key) + args, {
        withCredentials: false,
      });
    } else {
      return axios.get(`${getUrlByKey(key)}/query?${query}`, {
        data: args,
        withCredentials: false,
      });
    }
  };
  static apiPost = async (key, args) => {
    return axios.post(getUrlByKey(key), args);
  };

  static apiPostUrl = async (key, dynamicUrl, args) => {
    return axios.post(getUrlByKey(key) + dynamicUrl, args);
  };

  static apiPut = async (key, args) => {
    if (typeof args === "string") {
      return axios.put(getUrlByKey(key) + args, {
        withCredentials: false,
      });
    } else {
      return axios.put(getUrlByKey(key), args, {
        withCredentials: false,
      });
    }
  };

  static apiPutUrl = async (key, dynamicUrl, args) => {
    return axios.put(getUrlByKey(key) + dynamicUrl, args);
  };

  static apiUploadFile = async (key, args, config) => {
    return axios.post(getUrlByKey(key), args, config);
  };

  static apiUpdateFile = async (key, dynamicUrl, args, config) => {
    return axios.put(getUrlByKey(key) + dynamicUrl, args, config);
  };

  static apiDelete = async (key, args) => {
    return axios.delete(getUrlByKey(key), args);
  };

  static apiDeleteUrl = async (key, dynamicUrl, args) => {
    return axios.delete(getUrlByKey(key) + dynamicUrl, { data: args });
  };

  static apiDeletePost = async (key, args) => {
    return axios.delete(getUrlByKey(key), { data: args });
  };

  static setCSRF = (csrf_token, sessionid) => {
    const CSRF_COOKIE = sessionid;
    if (process.browser) {
      localStorage.setItem("transfin_token", CSRF_COOKIE);
      axios.defaults.headers.common["X-CSRFToken"] = CSRF_COOKIE;
    }
  };
}

export default API;

//# interceptors

axios.interceptors.request.use(
  function (config) {
    var loading = true;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    var loading = false;
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.log("unauthorise user");
      auth.logout();
    }
    return Promise.reject(error);
  }
);

export const setAuthorization = () => {
  // console.log(localStorage.getItem('accessToken'))
  //to consider major cookies security
  axios.defaults.withCredentials = false;
  axios.defaults.headers.common["authorization"] = process.browser && localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : '';
  axios.defaults.headers.common["Platform"] = "web-admin";
  axios.defaults.headers.common[APP_NAME + "Version"] = "2.0.0";
  axios.defaults.headers.common["version"] = "v1"; // API VERSION
}
setAuthorization();   
