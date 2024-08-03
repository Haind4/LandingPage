import React, { useEffect, useState } from 'react'
import './ContentNewDetail.scss'
import { useRouter } from 'next/router';
import API from "../../../Service/API";
import { replaceDescription } from '../../../Helper/helpFunction';
function ContentNewDetail() {
    const router = useRouter();
    const query = router?.query.slug[0] || ''
    const [detail, setDetail] = useState(null)
    console.log(detail);
    const fetch = async () => {
        const res = await API.News.getNews({
            'populate': '*',
            'filters[id]': query,
            'pagination[page]': 0,
            'pagination[pageSize]': 1
        })
        if (res?.status === 200) {
            setDetail(res?.data?.data?.[0])
        }
    }
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div className='ZUFAHRYOQS'>
            <h1>{detail?.attributes?.tieude}</h1>
            <div className='COSVFIRFRK' dangerouslySetInnerHTML={{ __html: replaceDescription(detail?.attributes?.noidung) }}></div>
        </div>
    )
}

export default ContentNewDetail