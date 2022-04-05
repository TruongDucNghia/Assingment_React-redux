import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteCategorys, getCategorys } from '../../../features/CategorySlice'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListCate = () => {
    const dispatch = useDispatch()
    const category = useSelector(data => data.category.value)

    const toastMess = () => toast.error("Xóa sản phẩm thành công !")
    useEffect(() =>{
        dispatch(getCategorys())
    }, [])
    const handleDeleteCate = (id) => {
        const action = window.confirm('Bạn chắc có muốn xóa danh mục này ?')
        if(action){
            const deleteCate = () =>{
                dispatch(deleteCategorys(id))
            }
            deleteCate()
            toastMess()
        }
    }  
  return (
    <div>
            <h1>List category</h1>

            <ToastContainer autoClose={1000}/>
            
            <NavLink to='/admin/category/add'>
            <button type="button" className="btn btn-success">Add category</button>
            </NavLink>
                           
            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {category?.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.img} />
                        </td>
                        <td>
                            <NavLink to={`/admin/category/${item.id}/update`}>
                                <button type="button" className="btn btn-success btn-rounded btn-fw">Update</button>
                            </NavLink>
                            <button type="button" onClick={() => handleDeleteCate(item.id)} className="btn btn-danger btn-rounded btn-fw">Delete</button>
                        </td>
                    </tr>)}
                    
                    
                </tbody>
            </table>

        </div>
  )
}

export default ListCate