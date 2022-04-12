import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { getAllOrder, updateOrder } from '../../../features/OrderSlice'

const ListOrder = () => {
    const order = useSelector(state => state.order.value)
    const dispatch = useDispatch()
    const toastMess = () => toast.success('Cập nhật đơn hàng thành công !')
    useEffect(() =>{
        dispatch(getAllOrder())
    }, [])
    const handleUpdateStatus = (data, id) =>{
        const datas = {id, status: +data}
        dispatch(updateOrder(datas))
        toastMess()
    }
    return (
        <div>
            <h1>List order</h1>

            <ToastContainer autoClose={1000} />

            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Name user</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Note</th>
                        <th>Total Price</th>
                        <th>CreatedAt</th>
                        <th>Status</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {order?.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.note}</td>
                            <td>{item.totalProducts}</td>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                            <td>
                                <select onChange={(e) => handleUpdateStatus(e.target.value, item.id)}>
                                    <option selected={item.status === 0} value={0}>Chưa xác nhận</option>
                                    <option selected={item.status === 1} value={1}>Đã giao hàng</option>
                                    <option selected={item.status === 2} value={2}>Hủy đơn</option>
                                </select>
                            </td>
                            <td>
                            <NavLink to={`/admin/order/${item.id}/detail`}>
                                <button type="button" className="btn btn-success btn-rounded btn-fw">Detail</button>
                            </NavLink>
                            
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ListOrder