import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { logout, signups } from '../../../features/UserSlice'
import { ToastContainer, toast } from 'react-toastify';
import FormSignin from './FormSignin'


const FormUser = () => {
  const isUser = useSelector(state => state.user.value)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const toastMess = () => toast.success('Chúc mừng bạn đăng ký thành công !')
  const dispatch = useDispatch()
  const onSubmitRegister =  (data) => {
    const roleId = 0
    dispatch(signups({...data, roleId}))
    toastMess()
    reset()

  }
  const numberFavorite = useSelector(state => state.favorite.value)
  function handlerLogout(e){
    e.preventDefault()
    const action = window.confirm('Bạn chắc có muốn đăng xuất chứ ?')
    if(action){
      dispatch(logout())
    }
    
  }
  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <div className="user-options">
        <div className="search-rp" />
        {/* khi đã đăng nhập thành công */}
        {isUser.length !== 0 ? 
        <div className="profile pt-4 pb-4">
          <span className="title-pop-user">Hồ sơ<i className="fa fa-angle-down ml-2" aria-hidden="true" /></span>
          <div className="pop-profile">
            <NavLink to="/profile">Bảng điều khiển</NavLink>
            <a href='' onClick={handlerLogout}>Đăng xuất</a>
          </div>
        </div>
        :
        // khi chưa đăng nhập
        <div className="account pt-4 pb-4" id="popup-user" data-toggle="modal" data-target="#box-login-register">
            <span className="title-pop-user">Đăng nhập / Đăng ký</span>
            <span className="icon__account"><i className="fas fa-user-circle" /></span>
        </div>
        }
        

        
        {/* pops up login */}
        <div className="modal fade " role="dialog" id="box-login-register" style={{ zIndex: 100 }}>
          <div className="modal-dialog">
            <div className="modal-content box-content-user mt-5">
              <div className="modal-header" style={{ border: 'none', paddingBottom: 0 }}>
                <button type="button" className="close" data-dismiss="modal" style={{ outline: 'none' }}>×</button>
              </div>
              <div className="modal-body box-user">
                <div className="title">
                  <span className="title-sign_in">Đăng nhập</span>
                  <span className="title-register">Đăng ký</span>
                </div>
                <div className="welcome">
                  Chào mừng bạn!
                </div>
                {/* mess form */}
                {/* <div class="bg-danger"></div> */}
                <FormSignin/>
                {/* register */}
                <form onSubmit={handleSubmit(onSubmitRegister)} encType="multipart/form-data" name="form-register" id="register_user" className="p-5">
                  <div className="errRegister" style={{ color: 'red' }}>
                  </div>
                  <div className="form-group">
                    <input {...register('username', {required: true})} type="text" name="username" id="username" placeholder="Tên đầy đủ" className="fullname" />
                    <p style={{ color: 'red' }}>{errors.username?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                  </div>
                  <div className="form-group">
                    <input {...register('email', {required: true, pattern:{
                      value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                      message: "Bạn phải nhập đúng email"
                    }})} type="text" name="email" id="email_register" placeholder="Nhập email" className=" email" />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    <p style={{ color: 'red' }}>{errors.email?.type === 'required' && "Bạn không được để trống trường này !"}</p>

                  </div>
                  <div className="form-group">
                    <input {...register('password', {required: true, minLength: 6})} type="password" name="password" placeholder="Nhập mật khẩu" className=" password" id="pass_register" />
                    <p style={{ color: 'red' }}>{errors.password?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                    <p style={{ color: 'red' }}>{errors.password?.type === 'minLength' && "Mật khẩu ít nhất 6 ký tự !"}</p>
                  </div>
                  <div className="form-group">
                    <input {...register('birthday', {required: true})} type="date" name="birthday" id="birthday" placeholder="Ngày sinh của bạn" className="birthday" />
                    <p style={{ color: 'red' }}>{errors.birthday?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                  </div>
                  <div className="form-group">
                    <input {...register('phone', {required: true, pattern:{
                      value: /^[0-9]{0,156}$/,
                      message: "Vui lòng nhập đúng định dạng sđt"
                    }})} type="text" name="phone" id="phone" placeholder="Số điện thoại của bạn" className="phone" />
                    <p style={{ color: 'red' }}>{errors.phone?.message}</p>
                    <p style={{ color: 'red' }}>{errors.phone?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                  </div>
                  <div className="gender col-md-12 mb-4 mt-4">
                    <div className="form-check-inline" style={{ display: "flex", justifyItems: "center", alignItems: 'center' }}>
                      <input {...register('gender')} defaultValue={0} id="gender" type="radio" name="gender" defaultChecked />
                      <label htmlFor="gender" className="form-check-label mr-4">
                        Nam
                      </label>
                      <input {...register('gender')} defaultValue={1} id="gender2" type="radio" name="gender" />
                      <label htmlFor="gender2" className="form-check-label">
                        Nữ
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="col-md-12 btn btn-secondary p-2" id="btn_register">Tạo tài khoản</button>
                  <div className="forgot-pass text-center m-3">
                    <p>Bạn chắc chắn rằng sẽ đồng ý với những điều khoản của chúng tôi!</p>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ display: 'block' }}>
              </div>
            </div>
          </div>
        </div>
        {/* end modal login*/}
        <a href="#lang" className="lang pt-4 pb-4">
          <img src="./img/vietnam.png" />
        </a>
        <div className="box-favorite-pro pt-4 pb-4">
          <NavLink to='/favorites' className="favorite-pro">
            <i className="fa fa-heart" aria-hidden="true" />
          </NavLink>
          <div className="notifi">
            {numberFavorite?.length}
          </div>
        </div>
        <div className="box-cart pt-4 pb-4">
          <a href="cartClient" className="cart">
            <i className="fa fa-shopping-bag" aria-hidden="true" />
          </a>
          <div className="notifi">
            0
          </div>
          {/* start popup-cart */}
          {/* hover hiển thị thông in giỏ hàng */}
        </div>
      </div>
    </div>
  )
}

export default FormUser