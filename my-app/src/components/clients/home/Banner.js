import React, { useEffect } from 'react'
import Slider from "react-slick";


const Banner = (props) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000

      };
    return (
        <div>
            <Slider {...settings} className="banner">
                <a className="banner-item">
                    <div className="banner_imgBox">
                        <img src="./img/banner1.jpg" width="100%" />
                    </div>
                </a>
                <a className="banner-item">
                    <div className="banner_imgBox">
                        <img src="./img/banner2.jpg" width="100%" />
                    </div>
                </a>
                <a className="banner-item">
                    <div className="banner_imgBox">
                        <img src="./img/banner3.jpg" width="100%" />
                    </div>
                </a>
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