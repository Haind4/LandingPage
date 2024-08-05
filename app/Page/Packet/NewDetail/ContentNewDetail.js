import React, { useEffect, useState } from 'react';
import './ContentNewDetail.scss';
import { useRouter } from 'next/router';
import API from "../../../Service/API";
import { replaceDescription } from '../../../Helper/helpFunction';
import moment from 'moment';
import { Spin } from 'antd';

function ContentNewDetail() {
    const router = useRouter();
    const id = router?.query.slug[0] || '';
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        const res = await API.News.getNewsByID(id);
        if (res?.status === 200) {
            setDetail(res?.data?.object);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetch();
    }, []);

    if (loading) {
        return <Spin className='AYYPFXIIPF' />;
    }

    return (
        <div className='ZUFAHRYOQS'>
            <h1>{detail?.metadata?.title}</h1>
            <div className='HTLPGXEDDH'>
                {moment(detail?.created_at).format('DD/MM/YYYY') || ''}
            </div>
            <div className='COSVFIRFRK' dangerouslySetInnerHTML={{ __html: replaceDescription(detail?.metadata?.content) }}></div>
        </div>
    );
}

export default ContentNewDetail;
