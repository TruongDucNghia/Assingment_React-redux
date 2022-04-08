import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const productCart = useSelector(state => state.cart.value)
    console.log(productCart);
    return (
        <div>
            <main className="body__cart">
                <div className="body__cart__title">
                    <h3>Giỏ hàng mua sắm</h3>
                    <div className="bg-success p-2 text-light" />
                    <div className="bg-success p-2 text-light" />
                </div>
                <div className="cart__content">
                    <div className="cart__checkout">
                        <div className="cart__checkout__title">
                            <span className="cart__title__text1">Những hạng mục của bạn</span>
                            <span className="cart__title__text2">Số lượng</span>
                            <span className="cart__title__text3">Giá vật phẩm</span>
                        </div>
                        <div className="cart__checkout__content">
                            <ul className="cart__items">
                                <li className="ci__wrap">
                                    <div className="ci__wrap__content">
                                        <div className="cart__left">
                                            <div className="cart__left__img">
                                                <a href>
                                                    <img src alt width="100%" />
                                                </a>
                                            </div>
                                            <div className="cart__left__info">
                                                <p />
                                                <span className="db">Thường giao hàng trong 4-8 ngày làm việc</span>
                                                <div className="cart__info__size">
                                                    <span>Màu </span>
                                                    <span>|</span>
                                                    <span>Size </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart__quanty">
                                            <form action method="POST">
                                                <input type="hidden" name="action" defaultValue="update_cart" />
                                                <input type="hidden" name="cart_id" defaultValue />
                                                <input type="hidden" name="pro_id" defaultValue />
                                                <input type="number" name="quantity" min={1} step={0} defaultValue />
                                                <button type="submit" name="btn_update_qty" className="btn btn-info"><i className="fa fa-refresh" aria-hidden="true" />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="cart__price">
                                            <span>đ</span>
                                        </div>
                                    </div>
                                    <div className="cart__remove">
                                        <a href="cartClient?action=del&id=<?= $item['cart_id'] ?>" className="text-danger">Xóa</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart__order">
                        <div className="cart__order__title">
                            <span>Tóm tắt theo thứ tự</span>
                        </div>
                        <div className="cart__order__content">
                            <div className="cart__sum__price">
                                <div className="sum__price__text">
                                    <span>Tổng phụ</span>
                                </div>
                                <div className="sum__price__dola">
                                    <span>31231231đ</span>
                                </div>
                            </div>
                            <div className="cart__btn__order">
                                <a href="checkoutClient?action=checkout">
                                    <button type="button">Thủ tục thanh toán</button>
                                </a>
                            </div>
                            <div className="cart__bottom">
                                <span>Bạn kiếm được 3,92 đô la phần thưởng cho đơn đặt hàng này!</span> <br /> <br />
                                <span>Phần thưởng sẽ được thêm vào tài khoản của bạn sau khi đơn hàng đã được vận chuyển đầy
                                    đủ. Số
                                    tiền thưởng có thể thay đổi.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body__cart__title" id="title2">
                    <h3>Đề xuất cho bạn</h3>
                </div>
                <div className="slick__slider">
                    <div className="cart__allItem slide-news">
                        <div className="cart__item">
                            <div className="cart__item__img">
                                <a href="productDetail?action=viewDetail&id=<?= $item['id'] ?>">
                                    <img src="./public/images/products/<?= $item['avatar'] ?>" alt width="100%" />
                                </a>
                            </div>
                            <div className="cart__item__Name">
                                <p>aksdal</p>
                            </div>
                            <div className="cart__item__PC">
                                <div className="cart__item__price">
                                    <p>123123123đ</p>
                                </div>
                                <div className="cart__item__color">
                                    <img src="public/images/layout/colorwheel-2.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* <div className="DH__content__body">
                    <div className>
                        <h3 className style={{ color: '#FFBC7F' }}>Giỏ hàng của bạn đang rỗng!</h3>
                        <a href="productClient?action=viewListProduct" className="text-primary text-center">Mua sắm ngay</a>
                    </div>
                    <div className>
                        <img src="./public/images/layout/empty-orders.jpg" alt />
                    </div>
                </div>  */}
            </main>

        </div>
    )
}

export default CartPage