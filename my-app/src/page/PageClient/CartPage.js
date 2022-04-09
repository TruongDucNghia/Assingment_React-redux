import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAllApi } from '../../api/cart'
import { decreaseQty, increaseQty, removeItemInCart } from '../../features/CartSlice'

const CartPage = () => {
    const [cartUser, setCartUser] = useState([])
    const productCart = useSelector(state => state.cart.value)
    const userId = useSelector(state => state.user.value.id)
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productCart))
        const cart = productCart.filter(item => item.userId === userId)
        setCartUser(cart)
    }, [productCart])
    let totalProducts = 0
    cartUser.forEach(item => {
        totalProducts += item.price * item.quantity
    })
    const handleIncrease = (id) =>{
        dispatch(increaseQty(id))
    }
    const handledecrease = (id) =>{
        dispatch(decreaseQty(id))
    }
    const handleRemove = (id) =>{
        dispatch(removeItemInCart(id))
    }
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
                                {cartUser?.map(item =>
                                    <li className="ci__wrap">
                                        <div className="ci__wrap__content">
                                            <div className="cart__left">
                                                <div className="cart__left__img">
                                                    <a href>
                                                        <img src={item.img} width="100%" />
                                                    </a>
                                                </div>
                                                <div className="cart__left__info">
                                                    <p>{item.name}</p>
                                                    <span className="db">Thường giao hàng trong 4-8 ngày làm việc</span>
                                                    <div className="cart__info__size">
                                                        <span>Màu: {item.color.map(i => i).join('-')} </span>
                                                        <span>|</span>
                                                        <span>Size:  {item.size.map(i => i).join('-')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart__quanty">
                                                <button onClick={() => handleIncrease(item.productId)} className='btnC'>+</button>
                                                <input value={item.quantity} type="number" />
                                                <button onClick={() => handledecrease(item.productId)} className='btnC'>-</button>
                                            </div>
                                            <div className="cart__price">
                                                <span>{(item.quantity * item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                            </div>
                                        </div>
                                        <div className="cart__remove">
                                            <p onClick={() => handleRemove(item.productId)}  className="text-danger">Xóa</p>
                                        </div>
                                    </li>
                                )}
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
                                    <span>{Number(totalProducts).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
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
                                    <p>adasdasdsa</p>
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