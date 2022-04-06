import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signins } from '../../../features/UserSlice'
const FormSignin = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value)
    const onSubmit = (data) =>{
        try {
            dispatch(signins(data))
            localStorage.setItem('user', JSON.stringify(user))
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} name="form-login" className="p-5" id="login_user">
                <div className="form-group">
                    <input {...register('email', {required: true, pattern:{
                      value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      message: "Bạn phải nhập đúng email"
                    }})} type="text" name="email" placeholder="Nhập email" className=" email" />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    <p style={{ color: 'red' }}>{errors.email?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                </div>
                <div className="form-group">
                <input {...register('password', {required: true, minLength: 6})} type="password" placeholder="Nhập mật khẩu" className=" password" />
                    <p style={{ color: 'red' }}>{errors.password?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{ color: 'red' }}>{errors.password?.type === 'minLength' && "Mật khẩu ít nhất 6 ký tự !"}</p>
                </div>
                <div className="pretty p-default mb-4 mt-4">
                    <input checked type="checkbox" id="remember" name="remember" />
                    <div className="state">
                        <label>Nhớ thông tin</label>
                    </div>
                </div>
                <div className="errLogin text-danger pb-2">
                </div>
                <button type="submit" className="col-md-12 btn btn-secondary p-2" id="btn_login_client">Đăng
                    nhập</button>
                <div className="forgot-pass text-center m-3">
                    <a href="forgotPass">Bạn quên mật khẩu?</a>
                </div>
                <div className="err" style={{ color: 'red' }}>
                </div>
            </form>
        </div>
    )
}

export default FormSignin