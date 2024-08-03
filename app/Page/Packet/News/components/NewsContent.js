import React, { useEffect, useState } from 'react'
import './NewsContent.scss'
import MA20967 from '../../Images/MA20967.png';
import API from "../../../../Service/API";
import { Pagination } from 'antd';
import moment from 'moment';
import { urlBaseGetImage } from '../../../../Helper/helpFunction';
import Link from 'next/link';
function NewsContent() {
    const [data, setData] = useState([]);
    const [params, useParams] = useState({
        populate: "*",
        "pagination[page]": 1,
        "pagination[pageSize]": 8,
        "sort[0]": "updatedAt:desc",
        // 'sort[0]': 'id:desc',
    });

    const fetch = async () => {
        const res = await API.News.getNews(params);
        if (res?.status === 200) {
            setData(res?.data?.data);
        }
    };

    useEffect(() => {
        fetch();
    }, []);
    return (
        <div className='WJFPXMDEUL'>
            <div className='HLKBQRPSKA'>
                {data?.map((item, index) => {
                    return <div className='QLDDXPYIZQ'>
                        <img src={urlBaseGetImage(item?.attributes?.image?.data?.attributes?.url)} />
                        <div className='MJKEUYQAQD'>
                            {moment(item.attributes?.updatedAt).format('DD/MM/YYYY')}
                        </div>
                        <div className='ESBPJTXTQX'>
                            <Link href={`/chi-tiet-tin-tuc/${item?.id}`}>
                                {item.attributes?.tieude}
                            </Link>
                        </div>
                    </div>
                })}
                <div className='QLDDXPYIZQ'>
                </div>
                <div className='QLDDXPYIZQ'>
                </div>
                <div className='QLDDXPYIZQ'>
                </div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default NewsContent