import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckOutPage = () => {
    return (
        <div>
            <main className="body__order">
                <form id="checkout" className="body__order__content" method="POST">
                    <div className="body__order__left">
                        <div className="order__left__title">
                            <h3>1. Địa chỉ giao hàng</h3>
                        </div>
                        {/* address */}
                        <div className="form__address">
                            <div className="address">
                                <div className="nation">
                                    <p>Quốc gia của bạn</p>
                                    <div className="vn">
                                        <img src="img/vietnam.png" alt />
                                        <span>Việt Nam</span>
                                    </div>
                                </div>
                            </div>
                            <div className="address">
                                <label htmlFor>Họ tên</label>
                                <input name="fullname" type="text" />
                            </div>
                            <div className="address">
                                <label htmlFor>Địa chỉ cụ thể</label>
                                <textarea name="address_spec" id cols={30} rows={3} className style={{ border: '1px solid #d7d7d7', borderRadius: 5 }}  />
                            </div>
                            <div className="address">
                                <label htmlFor>Số điện thoại</label>
                                <input name="phone" type="text" />
                            </div>
                        </div>
                        {/* pro odder */}
                        <div className="order__bottom">
                            <div className="order__bottom__title">
                                <h3>2. Mặt hàng thanh toán</h3>
                            </div>
                            <div className="order__bottom__content">
                                <div className="order__bottom__item">
                                    <img src="public/images/products/6a3303333db533225eff5745b555e96413eb6e83.jpg" alt width="70px" />
                                    <div className="order__info">
                                        <div className="order__name">
                                            <p>Envy Look Spoon Fur Fleeced Sweatshirt</p>
                                        </div>
                                        <div className="order__text">
                                            <p>ĐEN</p>
                                            <p>|</p>
                                            <p>Size M</p>
                                            <p>|</p>
                                            <p>Qty 1</p>
                                            <p>|</p>
                                            <p>10000 vnd</p>
                                        </div>
                                    </div>
                                </div>
                                {/* tổng giá (check nếu nhập đúng mã vc thì đưa ra giá new)*/}
                                {/* tổng tiền */}
                                <input type="hidden" name="total_price" id="total_price" defaultValue={30033} />
                                <div className="order__chage">
                                    <NavLink to="/cart" className="text-primary">Chỉnh sửa giỏ hàng</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body__order__right">
                        {/* bill */}
                        <div className="order__right__content">
                            <div className="right__content__title">
                                <h3>Tóm tắt nhanh</h3>
                            </div>
                            <div className="right__content__body">
                                <div className="content__input--vocher" style={{ border: '1px solid #d7d7d7', borderRadius: 5 }}>
                                    <input id="vochers" name="vocher" disabled type="text" placeholder="Phiếu giảm giá {Chưa áp dụng}" />
                                    {/* <div className="sub__vorcher">
                                        <button type="submit" name="btn_apply">Áp dụng</button>
                                    </div> */}
                                </div>
                                {/* <label for="vocher" class="error" style="display: none; margin-left: 20px !important;"></label> */}
                                <div className="content__subtotal">
                                    <span>Tổng giá:</span>
                                    <p>1 tỵ</p>
                                </div>
                                <div id="shiping" className="content__subtotal">
                                <span>Phí chuyển hàng:</span>
                                <p>30,000đ</p>
                            </div>
                            <div className="contnet__all">
                                <span><b>Số tiền phải thanh tóan</b>:
                                    2 tỵ</span>
                                <p />
                            </div>
                            <div className="content__note">
                                <div className="note">
                                    <p><i className="fas fa-plus" /> Thêm ghi chú vào đơn hàng này</p>
                                </div>
                                <div className="note__input">
                                    <input type="text" name="note" placeholder="Lưu ý của khách hàng" />
                                </div>
                            </div>
                            <div className="content__ok">
                                <div className="pretty p-default">
                                    <input type="checkbox" name="agree" defaultChecked />
                                    <div className="state p-info">
                                        <label>Tôi chấp nhận các Điều khoản và Chính sách Bảo mật.</label>
                                    </div>
                                </div>
                                <span style={{ fontSize: 12 }} className="text-primary">Điều khoản và Chính sách Bảo mật.</span>
                                
                            </div>
                            <div className="content__submitAll">
                                <button type="submit" name="btn_order">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </main>

    </div>
  )
}

export default CheckOutPage