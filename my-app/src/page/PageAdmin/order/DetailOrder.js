import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getOrderDetail } from '../../../api/order'

const DetailOrder = () => {
    const [order, setOrder] = useState([])
    const {id} = useParams()
    useEffect(() =>{
        const getOrder = async (id) =>{
            const {data} = await getOrderDetail(id)
            setOrder(data)
        }
        getOrder(id)
    }, [])
    return (
        <div>
            <h1>List category</h1>

            {/* <ToastContainer autoClose={1000} /> */}

            <NavLink to='/admin/order/list'>
                <button type="button" className="btn btn-success">List order</button>
            </NavLink>

            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {order.order?.map((item, index) => 
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.img} width='150px'/>
                            </td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.color.map(i => i).join('-')}</td>
                            <td>{item.size.map(i => i).join('-')}</td>
                            
                        </tr>
                    )}


                </tbody>
            </table>

        </div>
    )
}

export default DetailOrder