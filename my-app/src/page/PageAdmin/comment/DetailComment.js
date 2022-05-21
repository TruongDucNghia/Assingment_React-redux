import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { deleteComment, getCommentDetail } from '../../../api/comment'

const DetailComment = () => {
    const { id } = useParams()
    const [listComment, setListComment] = useState([])
    useEffect(() => {
        const get = async (id) => {
            const { data } = await getCommentDetail(id)
            console.log(data[0].comments);
            setListComment(data[0].comments)
        }
        get(id)
    }, [])
    const handleDelete = async (id) =>{
        await deleteComment(id)
        const action = window.confirm('Bạn chắc có muốn xóa bình luật này ?')
        if(action){
            const newData = listComment?.filter(item => item.id !== id)
            setListComment(newData)
        }
    }
    return (
        <>
            <NavLink to='/admin/comments'>
                <button type="button" className="btn btn-success">List comment</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>User Name</th>
                        <th>createdAt</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {listComment?.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.content}</td>
                        <td>
                            {item.img == "" ? 'No Photos' : <img src={item.img} />}
                        </td>
                        <td>{item.username}</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                        <td>
                            <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger btn-rounded btn-fw">Delete</button>
                        </td>
                    </tr>)}


                </tbody>
            </table>

        </>
    )
}

export default DetailComment