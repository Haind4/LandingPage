import React, { useEffect, useState } from 'react';
import './NewsContent.scss';
import API from '../../../../Service/API';
import moment from 'moment';
import { replaceDescription, urlBaseGetImage } from '../../../../Helper/helpFunction';
import Link from 'next/link';
import { Pagination } from 'antd';

function NewsContent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({
        pretty: true,
        skip: 0,
        limit: 8,
        read_key: 'cA0Z6KOVMrBkCvo4wv7fLG3pP3tOgJ6VCo3auXVLvlLRoWppRJ',
        depth: 1,
        props: 'slug,title,metadata,id,created_at'
    });

    const handlePage = (page) => {
        setParams({
            ...params,
            skip: (page - 1) * params.limit,
        });
    };

    const fetch = async () => {
        setLoading(true);
        try {
            const res = await API.News.getNews(params);
            if (res?.status === 200) {
                setData(res?.data);
            }
        } catch (error) {
            console.error('Failed to fetch news:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch();
    }, [params]);

    return (
        <div className='WJFPXMDEUL'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='HLKBQRPSKA'>
                    {data?.objects?.map((item, index) => (
                        <div key={item.id} className='QLDDXPYIZQ'>
                            {item?.metadata?.image?.url && (
                                <img src={urlBaseGetImage(item.metadata.image.url)} alt={item.metadata.title} />
                            )}
                            <div className='MJKEUYQAQD'>
                                {moment(item?.created_at).format('DD/MM/YYYY') || 'MM'}
                            </div>
                            <div className='ESBPJTXTQX'>
                                <Link href={`/chi-tiet-tin-tuc/${item?.id}`}>
                                    {item?.title}
                                </Link>
                            </div>
                            <div className='RLBANWHNKB' dangerouslySetInnerHTML={{ __html: replaceDescription(item?.metadata?.content) }}></div>
                        </div>
                    ))}
                </div>
            )}
            <Pagination
                defaultCurrent={0}
                total={data?.total}
                pageSize={params.limit}
                onChange={(page) => handlePage(page)}
            />
        </div>
    );
}

export default NewsContent;
