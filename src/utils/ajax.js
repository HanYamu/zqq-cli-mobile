import Axios from "axios";
import Router from "@/router/router.js";
/* 引入vuex */
import Store from "../store/store";
// import Ls from "store";
import Urls from "./urls.js";

// import { Toast } from "mint-ui";

/* axios请求拦截 */
Axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
/* axios响应拦截 */
Axios.interceptors.response.use(
  res => {
    if (res.data.code === 40001) {
      Router.push({ name: "login" });
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

let getAxiosConfig = function(method, url, data, headers) {
  let ajaxObj = {};
  ajaxObj.baseURL = "";
  ajaxObj.timeout = 1000 * 60;
  ajaxObj.method = method;
  ajaxObj.url = Urls[url].url;
  if (method == "get" && data) {
    ajaxObj.params = data;
  }
  if (method == "post" && data) {
    ajaxObj.data = data;
  }
  ajaxObj.headers = {};
  if (headers) {
    for (let key in headers) {
      ajaxObj.headers[key] = headers[key];
    }
  }
  return ajaxObj;
};

export const axiosGet = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    Store.commit("setAjaxLoading", true);
    let axiosConfig = getAxiosConfig("get", url, data, headers);
    Axios(axiosConfig)
      .then(res => {
        Store.commit("setAjaxLoading", false);
        resolve(res.data);
      })
      .catch(err => {
        Store.commit("setAjaxLoading", false);
        reject(err);
      });
  });
};
export const axiosPost = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    Store.commit("setAjaxLoading", true);
    let axiosConfig = getAxiosConfig("post", url, data, headers);
    Axios(axiosConfig)
      .then(res => {
        Store.commit("setAjaxLoading", false);
        resolve(res.data);
      })
      .catch(err => {
        Store.commit("setAjaxLoading", false);
        reject(err);
      });
  });
};
