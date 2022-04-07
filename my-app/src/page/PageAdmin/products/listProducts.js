import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { deleteProducts, getProducts } from '../../../features/ProductSlice'
import { ToastContainer, toast } from 'react-toastify';

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


const ListProducts = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getProducts())
    }, [])
    const toastMess = () => toast.error("Xóa sản phẩm thành công thành công !!!")
    const products = useSelector(state => state.product.value)
    const handleDeleteProduct = (id) =>{
        const action = window.confirm('Bạn có chắc muốn xóa sản phẩm này ?')
        if(action){
            dispatch(deleteProducts(id))
            toastMess()
        }
    }
    //initialize datatable
    useEffect(() =>{
        $(document).ready(function () {
            $('#duma').DataTable();
        });
    }, [])
  return (
    <div>
        <div>
            <h1>List products</h1>

            <ToastContainer autoClose={1000}/>
            
            <NavLink to='/admin/products/add'>
            <button type="button" className="btn btn-success">Add products</button>
            </NavLink>
                           
            <table id='duma' className="table">
                <thead>
                    <tr role="row">
                        <th >#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Description</th>
                        <th>Setting</th>

                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => 
                    <tr role="odd" key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name.slice(0, 20)}</td>
                        <td>
                            <img src={item.img}/>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.size.map(i => i + ',')}</td>
                        <td>{item.color.map(i => i + ',')}</td>
                        <td>{item.description.slice(0, 15)}...</td>
                        
                        <td>
                            <NavLink to={`/admin/products/${item.id}/update`}>
                                <button type="button" className="btn btn-success btn-rounded btn-sm">Update</button>
                            </NavLink>
                            <button onClick={() => handleDeleteProduct(item.id)} type="button" className="btn btn-danger btn-rounded btn-sm">Delete</button>
                        </td>
                    </tr>)}
                    
                    
                    
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ListProducts