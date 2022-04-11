import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllOrder } from '../../../features/OrderSlice'

const OrderPage = () => {
    const orderAll = useSelector(state => state.order.value)
    const isUser = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrder())
    }, [])
    const orderUser = orderAll.filter(item => item.userId === isUser.id)
    console.log(orderUser);
    return (
        <div className="acc__menu__content">
            <div className="acc__donhang">
                <div className="acc__DH__title">
                    <p>Lịch sử đơn hàng</p>
                </div>
                <div className="acc__DH__content">
                    {orderUser.length !== 0
                        ?
                        <div className="table-responsive">
                            <table className="table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Hàng</th>
                                        <th>Tổng tiền hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Ngày đặt hàng</th>
                                        <th>Tình trạng đơn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderUser?.map((item, i) =>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div style={{display: 'block'}}>
                                                    {item.order.map(i => <p>{i.name}</p>)}
                                                </div>
                                            </td>
                                            <td className="font-weight-bold">{item.totalProducts.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td>{item.phone}</td>
                                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                                            <td className="font-weight-medium">
                                                {item.status === 0 ?
                                                <div className="badge bg-warning text-dark">Chưa xác nhận</div>
                                                : item.status === 1 ?
                                                <div className="badge bg-success">Giao hàng thành công</div>
                                                :
                                                <div className="badge badge-danger">Đã hủy đơn</div>
                                                }
                                            </td>
                                            {/* <td>
                                    <a href="order?action=viewDetail&id=29" class="btn btn-primary text-light">Đã nhận được hàng</a>
                                </td> */}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <div classname="DH__content__title">
                                <p>Không tìm thấy đơn hàng</p>
                            </div>
                            <div classname="DH__content__body">
                                <img src="img/empty-orders.jpg" />
                            </div>
                        </div>


                    }
                </div>
            </div>
        </div>
    )
}

export default OrderPage