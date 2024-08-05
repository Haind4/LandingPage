import { urlParseParams } from "../../Helper/helpFunction";
import { axiosGET, axiosPOST, axiosPUT } from "../../Helper/TypeAxios";

const routerRoot = "objects";

export default class News {
  getNews(data) {
    const stringUrl = urlParseParams(data);
    return axiosGET("https:/api.cosmicjs.com/v3/buckets/mholding-landing-production/", `${routerRoot}?${stringUrl}`);
  }
  getNewsByID(id) {
    return axiosGET("https:/api.cosmicjs.com/v3/buckets/mholding-landing-production/", `${routerRoot}/${id}?read_key=cA0Z6KOVMrBkCvo4wv7fLG3pP3tOgJ6VCo3auXVLvlLRoWppRJ&depth=1&props=slug,title,metadata,id,created_at`);

  }

}

