import React, { useEffect } from 'react'
import $ from 'jquery'

function Footer() {
    useEffect(() =>{
        $(window).scroll(function(event) {
            var pos_body = $('html,body').scrollTop();
            if(pos_body>500){
                $('.back-to-top').addClass('show');
            }
            else{
                $('.back-to-top').removeClass('show');
            }
        });
        $('.back-to-top').click(function(event) {
            $('html,body').animate({
                scrollTop: 0},
                500);
        });
    }, [])
    return (
        <div>
            <div>
                <footer>
                    <div className="body__footer__index">
                        <div className="footer-top">
                            <div className="footer-item">
                                <span className="footer-top__title text-title">Về chúng tôi</span>
                                <p className="mt-2">Cho các đề nghị độc quyền!</p>
                            </div>
                            <div className="footer-item">
                                <form className="register_footer">
                                    <input type="email" placeholder="Địa chỉ email" name="email" />
                                    <button type="submit" name="btn_register">Đăng kí</button>
                                </form>
                            </div>
                            <div className="footer-social">
                                <a href="<?= $data['display']['fb_url'] ?>"><i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                                <a href="<?= $data['display']['fb_url'] ?>"><i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                <a href="<?= $data['display']['fb_url'] ?>"><i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                                <a href="<?= $data['display']['fb_url'] ?>"><i className="fa fa-pinterest" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-main">
                            <div className="footer-item">
                                <div className="footer-title text-title">
                                    Các cơ sở?
                                </div>
                                <span>Thanh xuân - Hà Nội</span>
                                <span>Cầu Giấy - Hà Nội</span>
                                <span>Đống Đa - Hà Nội</span>
                                <span>Quận 7 - Tp HCM</span>
                                <span>Quận 1 - TP HCM</span>
                            </div>
                            <div className="footer-item">
                                <div className="footer-title text-title">
                                    Các liên kết khác
                                </div>
                                <a >Thẻ quà tặng</a>
                                <a href="homepage#introduce">Câu chuyện của chúng tôi</a>
                                <a href="newClient">Blog</a>
                                <a >Chương trình liên kết</a>
                            </div>
                            <div className="footer-item">
                                <div className="footer-title text-title">
                                    Quốc gia
                                </div>
                                <a ><img src="./img/vietnam.png" width="50px" /></a>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="left">
                                KOODING.com © 2021 . All rights reserved
                            </div>
                            <div className="right">
                                <a href="checkoutClient?action=viewdieukhoan">Điều khoản sử dụng</a>
                                <a href="checkoutClient?action=viewdieukhoan">Chính sách bảo mật</a>
                                <a href="checkoutClient?action=viewdieukhoan">
                                    <i className="fa fa-universal-access" aria-hidden="true" />
                                    Hiển thị Công cụ Hỗ trợ Tiếp cận</a>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="back-to-top">
                    <i className="fa fa-chevron-up text-secondary" aria-hidden="true" />
                </div>
            </div>


        </div>
    )
}

export default Footer