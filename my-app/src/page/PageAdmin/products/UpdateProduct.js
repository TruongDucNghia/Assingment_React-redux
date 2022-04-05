import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getProductDetail, getSize } from '../../../api/products'
import {useDispatch, useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { getCategorys } from '../../../features/CategorySlice'
import { updateProducts } from '../../../features/ProductSlice'
const UpdateProduct = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [apiSize, setApiSize] = useState([])
  const dispatch = useDispatch()
  const [img, setImg] = useState()
  const [size, setSize]= useState([])
  const createdAt = new Date().getTime()
  const toastMess = () => toast.success("Cập nhật sản phẩm thành công !!!")
  const navigate = useNavigate()
  const {id} = useParams()
  
  const cate = useSelector(state => state.category.value)
  const handleGetSize = (name) =>{
    setSize(prev => {
      const isCheck = size.includes(name)
      if(isCheck){
        return size.filter(item => item !== name)
      }else{
        return [...prev, name]
      }
    })
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
  useEffect(() => {
    const getSizes = async () => {
      const { data } = await getSize()
      dispatch(getCategorys())
      setApiSize(data)
    }
    getSizes()
  }, [])

  useEffect(() =>{
    const getOneProduct = async (id) =>{
      const {data} = await getProductDetail(id)
      reset(data)
      setImg(data.img)
      setSize(data.size)
    }
    getOneProduct(id)
  }, [])
  
  const onSubmit = (data) => {
    if(!img || size.length === 0){
      document.querySelector('#errImg').innerHTML = 'Bạn phải nhập trường dữ liệu này !'
      document.querySelector('#errSize').innerHTML = 'Bạn phải nhập trường dữ liệu này !'
    }else{
        document.querySelector('#errImg').innerHTML = ''
        document.querySelector('#errSize').innerHTML = ''
        const color = [data.color]
        const datas = {...data, img, size, color, createdAt}
        dispatch(updateProducts(datas))
        toastMess()
        setTimeout(() =>{
            navigate('/admin/products')
        },2500)
        console.log(datas);
        console.log(data);
    }
  }
  return (
    <div>
      <h2>Form add products</h2>
      <ToastContainer autoClose={1200} />
      <NavLink to='/admin/products/list'>
        <button type="button" className="btn btn-success btn-secondary">List category</button>
      </NavLink>
      <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
        <div className="form-group">
          <label >Name</label>
          <input {...register('name', { required: true, maxLength: 50 })} type="name" className="form-control p-input" placeholder="Enter name" />
          <p style={{ color: 'red' }}>{errors.name?.type === 'required' && "Bạn không được để trống trường này !"}</p>
          <p style={{ color: 'red' }}>{errors.name?.type === 'maxLength' && "Bạn không được nhập quá 50 ký tự"}</p>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input onChange={handleGetImg} type="file" className="form-control p-input" />
          <p style={{ color: 'red' }} id='errImg'></p>
          <img id='imgNow' src={img} width='250px' />
        </div>

        <div className="form-group">
          <label >Price</label>
          <input {...register('price', { required: true, pattern: {
              value: /^[0-9]{0,156}$/,
              message: "Bạn phải nhập giá là số"
            } })} type="name" className="form-control p-input" placeholder="Enter price" />
            <p style={{ color: 'red' }}>{errors.price?.message}</p>
        </div>

        <div class="form-group">
          <label for="exampleSelectGender">Category</label>
          <select {...register('categoryId', {required: true})} class="form-control" style={{color: 'black'}} id="exampleSelectGender">
            {cate?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <p style={{ color: 'red' }}>{errors.categoryId?.type === 'required' && "Bạn không được để trống trường này !"}</p>
        </div>

        <div className='form-group'>
          <label>Size</label>
          <div style={{display: 'flex', gap: '10px'}}>
              {apiSize?.map(item => 
              <div key={item.id} class="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={size.includes(item.name)}
                    onChange={() => handleGetSize(item.name)}
                   className="form-check-input" />
                  {item.name}
                  <i className="input-helper"></i></label>
              </div>
            )}

          </div>
          <p style={{ color: 'red' }} id='errSize'></p>
        </div>

        <div className="form-group">
          <label >Color</label>
          <input {...register('color', { required: true })} type="text" className="form-control p-input" placeholder="Enter colors separated by commas" />
          <p style={{ color: 'red' }}>{errors.color?.type === 'required' && "Bạn không được để trống trường này !"}</p>
        </div>

        <div class="form-group">
          <label >Textarea</label>
          <textarea {...register('description',{required: true})} class="form-control" rows="4"></textarea>
          <p style={{ color: 'red' }}>{errors.description?.type === 'required' && "Bạn không được để trống trường này !"}</p>
        </div>


        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default UpdateProduct