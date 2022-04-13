import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const AlbumPage = () => {
    return (
        <main className="body__album">
            <div className="album__header">
                <div className="album__title">
                    <h3>#KOODING</h3>
                </div>
                <div className="album__text">
                    Chia sẻ các mặt hàng yêu thích của bạn với KOODING trên Instagram hoặc TikTok để nhận khoản tín dụng $ 5 cho lần mua hàng tiếp theo của bạn và có cơ hội được giới thiệu trên thư viện của chúng tôi!
                </div>
            </div>
            <div className="album__infor">
                <ul className="soc-rewards">
                    <li id="one" className="album__soc">
                        <span className="step-icon">
                            <i className="fa fa-camera" aria-hidden="true" />
                        </span>
                        <span className="step-name">
                            <p>1. Chụp ảnh hoặc quay video giới thiệu trang phục KOODING của bạn</p>
                        </span>
                    </li>
                    <li id="two" className="album__soc">
                        <span className="step-icon">
                            <i className="fa fa-share" aria-hidden="true" />
                        </span>
                        <span className="step-name">
                            <p>2. Thep dõi @KOODING và gắn thẻ @KOODING trên bài đăng của bạn</p>
                        </span>
                    </li>
                    <li id="three" className="album__soc">
                        <span className="step-icon">
                            <i className="fa fa-hashtag" aria-hidden="true" />
                        </span>
                        <span className="step-name">
                            <p>3. Đề cập đến #KOODING và số đơn đặt hàng của bạn trong chú thích</p>
                        </span>
                    </li>
                    <li id="four" className="album__soc">
                        <span className="step-icon">
                            <i className="fa fa-usd" aria-hidden="true" />
                        </span>
                        <span className="step-name">
                            <p>4. Nhận khoản tín dụng $ 5 cho lần mua hàng tiếp theo của bạn!</p>
                        </span>
                    </li>
                </ul>
            </div>
            <section id="ruby-photogallery">
                <LightGallery id="lightgallery">
                    <a href="./img/album/1.jpg"><img src="./img/album/1.jpg" /></a>
                    <a href="./img/album/2.jpg"><img src="./img/album/2.jpg" /></a>
                    <a href="./img/album/3.jpg"><img src="./img/album/3.jpg" /></a>
                    <a href="./img/album/4.jpg"><img src="./img/album/4.jpg" /></a>
                    <a href="./img/album/5.jpg"><img src="./img/album/5.jpg" /></a>
                    <a href="./img/album/6.jpg"><img src="./img/album/6.jpg" /></a>
                    <a href="./img/album/7.jpg"><img src="./img/album/7.jpg" /></a>
                    <a href="./img/album/8.jpg"><img src="./img/album/8.jpg" /></a>
                    <a href="./img/album/9.jpg"><img src="./img/album/9.jpg" /></a>
                    <a href="./img/album/10.jpg"><img src="./img/album/10.jpg" /></a>
                    <a href="./img/album/11.jpg"><img src="./img/album/11.jpg" /></a>
                    <a href="./img/album/12.jpg"><img src="./img/album/12.jpg" /></a>
                    <a href="./img/album/13.jpg"><img src="./img/album/13.jpg" /></a>
                    <a href="./img/album/14.jpg"><img src="./img/album/14.jpg" /></a>
                    <a href="./img/album/16.jpg"><img src="./img/album/16.jpg" /></a>
                    <a href="./img/album/17.jpg"><img src="./img/album/17.jpg" /></a>
                    <a href="./img/album/18.jpg"><img src="./img/album/18.jpg" /></a>
                    <a href="./img/album/19.jpg"><img src="./img/album/19.jpg" /></a>
                    <a href="./img/album/20.jpg"><img src="./img/album/20.jpg" /></a>
                    <a href="./img/album/21.jpg"><img src="./img/album/21.jpg" /></a>
                    <a href="./img/album/22.jpg"><img src="./img/album/22.jpg" /></a>
                    <a href="./img/album/23.jpg"><img src="./img/album/23.jpg" /></a>
                    <a href="./img/album/24.jpg"><img src="./img/album/24.jpg" /></a>
                    <a href="./img/album/25.jpg"><img src="./img/album/25.jpg" /></a>
                    <a href="./img/album/26.jpg"><img src="./img/album/26.jpg" /></a>
                    <a href="./img/album/27.jpg"><img src="./img/album/27.jpg" /></a>
                    <a href="./img/album/28.jpg"><img src="./img/album/28.jpg" /></a>
                    <a href="./img/album/29.jpg"><img src="./img/album/29.jpg" /></a>
                    <a href="./img/album/30.jpg"><img src="./img/album/30.jpg" /></a>
                    <a href="./img/album/31.jpg"><img src="./img/album/31.jpg" /></a>
                </LightGallery>
            </section>
            <a href className="ablum_load_more">Xêm thêm ...</a>
        </main>

    )
}

export default AlbumPage