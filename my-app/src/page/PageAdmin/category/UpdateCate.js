import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {  updateCategorys } from '../../../features/CategorySlice'
import { getCategoryDetail } from '../../../api/category'
import { ToastContainer, toast } from 'react-toastify';
const UpdateCate = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toastMess = () => toast.success("Cập nhật danh mục thành công !!!")
    const {id} = useParams()
    useEffect(() =>{
        const getOneCate = async () =>{
            const {data} = await getCategoryDetail(id)
            document.querySelector('#imgNow').src = data.img
            reset(data)
        }
        getOneCate()
    }, [])
    const onSubmit = (data) =>{
        dispatch(updateCategorys(data))
        toastMess()
        setTimeout(() =>{
            navigate('/admin/category')
        }, 2500)
    }
  return (
    <div>
            <h2>Form update category</h2>
            <ToastContainer autoClose={1200}/>
            <NavLink to='/admin/category/list'>
            <button type="button" className="btn btn-success btn-secondary">List category</button>
            </NavLink>
            <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input {...register('name', {required: true, maxLength: 50})} type="name" className="form-control p-input" placeholder="Enter name" />
                    <p style={{color: 'red'}}>{errors.name?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{color: 'red'}}>{errors.name?.type === 'maxLength' && "Bạn không được nhập quá 50 ký tự"}</p>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input {...register('img', {required: true, pattern:{
                        value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                        message: "Bạn phải nhập đúng địa chỉ cdn của ảnh"
                    }})} type="text" className="form-control p-input" placeholder="Address img" />
                    <img src='' id='imgNow' width='300px'/>
                    <p style={{color: 'red'}}>{errors.img?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{color: 'red'}}>{errors.img?.message}</p>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
  )
}

export default UpdateCate