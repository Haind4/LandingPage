import React from 'react';
import './NewsEvents.scss';
import Slider from "react-slick";
import MA208721 from '../../Images/MA208721.png';
import MA20967 from '../../Images/MA20967.png';
import MA207856 from '../../Images/MA207856.png';
import NextArrows from '../../Images/NextArrow.png'
import PrevArrows from '../../Images/PrevArrow.png'
function NewsEvents() {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <img src={NextArrows.src} />
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <img src={PrevArrows.src} />
            </div>
        );
    };

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "0px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrows: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='ANHWEDDSDR'>
            <div className='AESDPBOUGT'>
                tin tức & sự kiện
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='WTMHUYXMAH'>
                        <div className='RIHXYSONTQ'>
                            <img src={MA208721.src} />
                        </div>
                    </div>

                    <div className='WTMHUYXMAH' >
                        <div className='RIHXYSONTQ'>
                            <img src={MA207856.src} />
                        </div>
                    </div>
                    <div className='WTMHUYXMAH' >
                        <div className='RIHXYSONTQ'>
                            <img src={MA20967.src} />
                        </div>
                    </div>
                    <div className='WTMHUYXMAH'>
                        <div className='RIHXYSONTQ'>
                            <img src={MA20967.src} />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default NewsEvents;
