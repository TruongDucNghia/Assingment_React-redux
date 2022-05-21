import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllComment } from '../../../api/comment'

const ListComment = () => {
    const [listComment, setListComment] = useState([])
    useEffect(() =>{
        const get = async () =>{
            const {data} = await getAllComment()
            const newData = data.filter(item => item.comments.length !== 0)
            setListComment(newData)
        }
        get()
    }, [])
    return (
        <div>
            <h1>List comment</h1>

            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Comment</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {listComment?.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.img} />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.comments.length}</td>
                        <td>
                            <NavLink to={`/admin/comments/${item.id}/detail`}>
                                <button type="button" className="btn btn-success btn-rounded btn-fw">Detail</button>
                            </NavLink>
                        </td>
                    </tr>)}


                </tbody>
            </table>

        </div>
    )
}

export default ListComment