import React from 'react'
import './AboutCompany.scss';
import video from '../../Images/video.png'
function AboutCompany() {
    return (
        <div className='IXPSRBIEPO'>
            <div className='EZPKZKDBCL'>
                <div className='DLAYKTXWHX'>
                    giới thiệu công ty
                </div>
                <div className='PXSGSKVUCM'>
                    Với khát vọng đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và hiện đại, ở bất cứ lĩnh vực nào của Mholding cũng luôn đặt trải nghiệm khách hàng lên hàng đầu
                </div>
            </div>
            <div className='AEEBAGSLBV'>
                <img src={video.src}/>
            </div>
        </div>
    )
}

export default AboutCompany