import React from 'react'
import Slider from "react-slick";
import Banner from '../../Images/banner-web-medic-group 2.png'
import './BannerSlide.scss';
var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

};
function BannerSlide() {
    return (
        <Slider {...settings}>
            {[0, 1, 2, 3].map((item) => {
                return (
                    <div className='QDXYMBMUBT'>
                        <img src={Banner.src} />
                    </div>
                )
            })}
        </Slider>
    )
}

export default BannerSlide