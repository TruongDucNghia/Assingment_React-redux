import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { clearCart } from '../../features/CartSlice'
import { addOrder } from '../../features/OrderSlice'

const CheckOutPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isUser = useSelector(state => state.user.value)
    const createdAt = new Date().getTime()
    const [cartUser, setCartUser] = useState([])
    const productCart = useSelector(state => state.cart.value)
    useEffect(() => {
        const cart = productCart.filter(item => item.userId === isUser.id)
        setCartUser(cart)
    }, [productCart])
    let totalProducts = 0
    cartUser.forEach(item => {
        totalProducts += item.price * item.quantity
    })
    const messErr = () => toast.error('Vui lòng chọn đầy đủ thuộc tính sản phẩm !')
    const messSucc = () => toast.success('Thêm sản phẩm vào giỏ hàng thành công !')
    const handleCheckOut = (e) =>{
        e.preventDefault()
        console.log(e);
        const name = e.target[0].value
        const address = e.target[1].value
        const phone = e.target[2].value
        const note = e.target[4].value
        const status = 0
        if(name === '' || address === '' || phone === ''){
            messErr()
        }else{
            const data = {order: cartUser, userId: isUser.id, name, address, phone, note, status, totalProducts, createdAt}
            dispatch(addOrder(data))
            dispatch(clearCart(isUser.id))
            messSucc()
            setTimeout(() =>{
                navigate('/profile')
            }, 1200)
        }
        
    }
    return (
        <div>
            <main className="body__order">
                <ToastContainer autoClose={1200}/>
                <form onSubmit={handleCheckOut} className="body__order__content">
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
                                <input name="fullname" defaultValue={isUser.username} type="text" />
                            </div>
                            <div className="address">
                                <label htmlFor>Địa chỉ cụ thể</label>
                                <textarea name="address_spec" id cols={30} rows={3} className style={{ border: '1px solid #d7d7d7', borderRadius: 5 }} />
                            </div>
                            <div className="address">
                                <label htmlFor>Số điện thoại</label>
                                <input name="phone" defaultValue={isUser.phone} type="text" />
                            </div>
                        </div>
                        {/* pro odder */}
                        <div className="order__bottom">
                            <div className="order__bottom__title">
                                <h3>2. Mặt hàng thanh toán</h3>
                            </div>
                            <div className="order__bottom__content">
                                {cartUser?.map(item =>
                                    <div className="order__bottom__item">
                                        <img src={item.img} width="70px" />
                                        <div className="order__info">
                                            <div className="order__name">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="order__text">
                                                <p>{item.color.map(i => i).join('-')}</p>
                                                <p>|</p>
                                                <p>{item.size.map(i => i).join('-')}</p>
                                                <p>|</p>
                                                <p>Qty: {item.quantity}</p>
                                                <p>|</p>
                                                <p>{(item.quantity * item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* tổng giá (check nếu nhập đúng mã vc thì đưa ra giá new)*/}
                                {/* tổng tiền */}

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
                                    <p>{Number(totalProducts).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>
                                <div id="shiping" className="content__subtotal">
                                    <span>Phí chuyển hàng:</span>
                                    <p>30,000đ</p>
                                </div>
                                <div className="contnet__all">
                                    <span>Số tiền phải thanh toán:
                                    </span>
                                    <b>{Number(totalProducts + 30000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b>
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