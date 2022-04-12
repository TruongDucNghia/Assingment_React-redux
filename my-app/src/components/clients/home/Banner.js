import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";


const Banner = (props) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000

      };
    const imgBanner = useSelector(state => state.category.value)
    return (
        <div>
            <Slider {...settings} className="banner">
                {imgBanner.map(item =>
                    <a className="banner-item">
                        <div className="banner_imgBox">
                            <img src={item.img} width="100%" />
                        </div>
                    </a>
                )}
                
            </Slider>
            <div className="category-banner">
                <a href="#" className="box-cate">
                    Thời Trang Nam
                </a>
                <a href="#" className="box-cate">
                    Thời Trang Nữ
                </a>
                <a href="#" className="box-cate">
                    Đồ Thể Thao
                </a>
                <a href="#" className="box-cate">
                    Trẻ Em
                </a>
            </div>

        </div>
    )
}

export default Banner