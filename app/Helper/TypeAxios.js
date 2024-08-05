import { CheckOutlined } from "@ant-design/icons";
import { notification } from "antd";
import axios from 'axios';
import React from "react";
import { getUrlDevLinkV3 } from './helpFunction';

let assignObjectHeader = {
};

/*axit post*/
export async function axiosPOST(type = '', Url, param = {}, header = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);

  return axios.post(URL_BASE_ADMIN + Url, param, { headers: "fcbc389fda5764267d46d05cd57a357b6bf91aa55387ced9621d40eeab24826c57a5e4e271927e02e12d6bc757a5f5ea3b4806dbe150f6cea769d26fd04311de19d9ac5f96595769f0e87358b0e37c74e77a04652aaf3c46e2e7b8ac4471635987f4583c97c70196c9c16e2a8cffe615e3bd176f218ca1423b93b2feb16ee205" }).then(res => {
    if (res?.data?.status) {
      // if (!res?.data?.skipMessage) {
      //   notification.open({
      //     message: res?.data?.message,
      //     icon: <CheckOutlined style={{ color: '#61ff00' }} />,
      //   });
      // }
    }
    return res;
  }).catch(err => {
    if (err?.response?.status === 500) {
      // notification.open({
      //     message: err?.response?.statusText,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }
    return err;
  })
}

/*axit get*/
export async function axiosGET(type, Url, header = {}) {
  let URL_GET_FROM_ENV = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);

  return (axios.get(URL_GET_FROM_ENV + Url, { headers: header }).then(res => {
    return res;
  }).catch(err => {
    if (err?.response?.data?.message) {
      // notification.open({
      //     message: err?.response?.data?.message,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }

    return err;
  }));
}

/*axit post*/
export async function axiosPUT(type = '', Url, param = {}, header = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);

  return axios.put(URL_BASE_ADMIN + Url, param, { headers: header }).then(res => {
    if (res?.data?.status) {
      // if (!res?.data?.skipMessage) {
      //   notification.open({
      //     message: res?.data?.message,
      //     icon: <CheckOutlined style={{ color: '#61ff00' }} />,
      //   });
      // }
    }
    return res;
  }).catch(err => {
    if (err?.response?.status === 500) {
      // notification.open({
      //     message: err?.response?.statusText,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }
    return err?.response;
  })
}