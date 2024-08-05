import { axiosGET } from "../Helper/TypeAxios";

export default class MenuList {
    getMenuList() {
        return axiosGET('api_strapi', `menus?filters[status][$eq]=ACTIVE&filters[level][$eq]=1&sort[0]=order:asc&populate[0]=child&populate[1]=child.child&populate[2]=child.child.child`, {})
    }

}

