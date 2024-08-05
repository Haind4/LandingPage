import React from 'react'
import '../Home.scss';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../../Images/abcss.png'
import Link from 'next/link';
function Header() {
    const dataMenu = [
        { title: 'TRANG CHỦ', link: '/' },
        { title: 'TIN TỨC', link: '/tin-tuc' },
        { title: 'GIỚI THIỆU', link: '#' },
        { title: 'CÔNG TY THÀNH VIÊN', link: '#' },
        { title: 'LĨNH VỰC KINH DOANH', link: '#' },
        { title: 'TUYỂN DỤNG', link: '#' },
        { title: 'LIÊN HỆ', link: '#' },
    ]
    return (
        <div>
            <div className='LGOZKCITCT'>
                <img src={logo.src} />
            </div>
            <div className='KXKHHJQBPO'>
                <div className='ATSYHLNZMN'>
                    <div className='YBVTSWUPUJ'>
                        {dataMenu?.map((item) => {
                            return (
                                <Link href={item?.link || '#'}>
                                    <div className='PIHHDXKNRI'>
                                        {item?.title}
                                    </div>
                                </Link>

                            )
                        })}
                    </div>
                    <div className='GYKKQDFKRJ'>
                        <div className='RPNQUUHOBF'>
                            <input className='HIOXDHBUGL' />
                            <div className='RCPNICPVGE'>
                                <SearchOutlined style={{ color: '#fff' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="top-nav">
                <div className='MOCLQZOABL'>
                    <img src={logo.src} />
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    {dataMenu?.map((item) => {
                        return (
                            <li>{item?.title}</li>
                        )
                    })}
                </ul>
            </section>
        </div >
    )
}

export default Header