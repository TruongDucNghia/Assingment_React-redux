import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { addNews } from '../../../features/NewsSlice'
import { ToastContainer, toast } from 'react-toastify';
const AddNews = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const toastMess = () => toast.success('Thêm bài viết thành công !')
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        if(!img){
            document.querySelector('#errImg').innerHTML = 'Bạn phải nhập ảnh cho bài viết !'
        }else{
            document.querySelector('#errImg').innerHTML = ''
            const createdAt = new Date().getTime()
            dispatch(addNews({...data, img, createdAt}))
            toastMess()
            setTimeout(() =>{
                navigate('/admin/news')
            }, 2200)
        }
    }
    async function handleGetImg(e){
        const file = e.target.files[0]
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
        const formData = new FormData()

        formData.append('file', file);
        formData.append('upload_preset', "cyfbktyp");
        const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
              "Content-Type": "application/form-data"
            }
        });
        setImg(response.data.url)
        document.querySelector('#imgNow').src = response.data.url
    }
    return (
        <div>
            <ToastContainer autoClose={2000}/>
            <div className="card-body">
                <h4 className="card-title">Form add news</h4>
                <NavLink to='/admin/news'>
                    <button type="button" className="btn btn-success">List news</button>
                </NavLink>
                <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Title</label>
                        <input {...register('title', {required: true})} type="text" className="form-control" id="exampleInputName1" placeholder="Title news" />
                        <p style={{color: 'red'}}>{errors.title?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Image</label>
                        <input onChange={handleGetImg} type="file" className="form-control"/>
                        <p id='errImg' style={{color: 'red'}}></p>
                        <img src='' id='imgNow' width='300px'/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea1">Short description</label>
                        <textarea {...register('shortDesc', {required: true})} className="form-control" rows={4} defaultValue={""} />
                        <p style={{color: 'red'}}>{errors.shortDesc?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea1">Content</label>
                        <textarea {...register('content', {required: true})} className="form-control" rows={10} defaultValue={""} />
                        <p style={{color: 'red'}}>{errors.content?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Author</label>
                        <input {...register('author', {required: true})} type="text" className="form-control" id="exampleInputName1" placeholder="Author news" />
                        <p style={{color: 'red'}}>{errors.author?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                </form>
            </div>

        </div>
    )
}

export default AddNews