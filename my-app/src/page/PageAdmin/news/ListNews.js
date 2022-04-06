import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { deleteNews, listNews } from '../../../features/NewsSlice'
import { ToastContainer, toast } from 'react-toastify';
const ListNews = () => {
    const dispatch = useDispatch()
    const toastMess = () => toast.error('Xóa bài viết thành công !')
    const news = useSelector(state => state.news.value)
    useEffect(() =>{
        dispatch(listNews())        
    }, [])
    const handleDeleteNews = (id) =>{
        const action = window.confirm('Bạn chắc có muốn xóa bài viết này !')
        if(action){
            dispatch(deleteNews(id))
            toastMess()
        }
    }
    console.log(1);
    return (
        <div>
            <h1>List category</h1>

            <ToastContainer autoClose={1000} />

            <NavLink to='/admin/news/add'>
                <button type="button" className="btn btn-success">Add news</button>
            </NavLink>

            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Short description</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {news?.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title.slice(0, 15)}...</td>
                        <td>
                            <img src={item.img} />
                        </td>
                        <td>{item.shortDesc.slice(0, 20)}...</td>
                        <td>{item.content.slice(0, 25)}...</td>
                        <td>{item.author}</td>
                        <td>
                            <NavLink to={`/admin/news/${item.id}/update`}>
                                <button type="button" className="btn btn-success btn-rounded btn-fw">Update</button>
                            </NavLink>
                            <button type="button" onClick={() => handleDeleteNews(item.id)} className="btn btn-danger btn-rounded btn-fw">Delete</button>
                        </td>
                    </tr>)}


                </tbody>
            </table>

        </div>
    )
}

export default ListNews