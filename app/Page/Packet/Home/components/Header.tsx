import React from 'react'
import '../Home.scss';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../../Images/abcss.png'
function Header() {
    const dataMenu = [
        { title: 'TRANG CHỦ' },
        { title: 'GIỚI THIỆU' },
        { title: 'CÔNG TY THÀNH VIÊN' },
        { title: 'LĨNH VỰC KINH DOANH' },
        { title: 'TUYỂN DỤNG' },
        { title: 'LIÊN HỆ' },
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
                                <div className='PIHHDXKNRI'>
                                    {item?.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='GYKKQDFKRJ'>
                        <div className='RPNQUUHOBF'>
                            <input />
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
        </div>
    )
}

export default Header