import { urlParseParams } from "../../Helper/helpFunction";
import { axiosGET, axiosPOST, axiosPUT } from "../../Helper/TypeAxios";

const routerRoot = "tin-tucs";

export default class News {
  getNews(data) {
    const stringUrl = urlParseParams(data);
    return axiosGET("tin-tucs", `${routerRoot}/?${stringUrl}`, {
      Authorization: `Bearer fcbc389fda5764267d46d05cd57a357b6bf91aa55387ced9621d40eeab24826c57a5e4e271927e02e12d6bc757a5f5ea3b4806dbe150f6cea769d26fd04311de19d9ac5f96595769f0e87358b0e37c74e77a04652aaf3c46e2e7b8ac4471635987f4583c97c70196c9c16e2a8cffe615e3bd176f218ca1423b93b2feb16ee205`,
    });
  }

}

