import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink} from 'react-router-dom'


const FormUser = () => {
  const isUser = localStorage.getItem('user')
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmitRegister = async (data) => {
    // await registers({ ...data, roleId: 0 })
    // alert("Đăng ký tài khoản thành công!")
    // navigate('/')
    // reset()
    console.log(data);

  }
  function handlerLogout(e){
    e.preventDefault()
    localStorage.removeItem('user')
    
  }
  return (
    <div>
      <div className="user-options">
        <div className="search-rp" />
        {/* khi đã đăng nhập thành công */}
        {isUser ? 
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
                {/* <FormLogin /> */}
                {/* register */}
                <form onSubmit={handleSubmit(onSubmitRegister)} encType="multipart/form-data" name="form-register" id="register_user" className="p-5">
                  <div className="errRegister" style={{ color: 'red' }}>
                  </div>
                  <div className="form-group">
                    <input {...register('username')} type="text" name="username" id="username" placeholder="Tên đầy đủ" className="fullname" />
                  </div>
                  <div className="form-group">
                    <input {...register('email')} type="text" name="email" id="email_register" placeholder="Nhập email" className=" email" />
                  </div>
                  <div className="form-group">
                    <input {...register('password')} type="password" name="password" placeholder="Nhập mật khẩu" className=" password" id="pass_register" />
                  </div>
                  <div className="form-group">
                    <input {...register('birthday')} type="date" name="birthday" id="birthday" placeholder="Ngày sinh của bạn" className="birthday" />
                  </div>
                  <div className="form-group">
                    <input {...register('phone')} type="text" name="phone" id="phone" placeholder="Số điện thoại của bạn" className="phone" />
                  </div>
                  <div className="gender col-md-12 mb-4 mt-4">
                    <div className="form-check-inline" style={{ display: "flex", justifyItems: "center", alignItems: 'center' }}>
                      <input {...register('gender')} className="" defaultValue={0} id="gender" type="radio" name="gender" defaultChecked />
                      <label htmlFor="gender" className="form-check-label mr-4">
                        Nam
                      </label>
                      <input {...register('gender')} className="" defaultValue={1} id="gender2" type="radio" name="gender" />
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
          <a className="favorite-pro">
            <i className="fa fa-heart" aria-hidden="true" />
          </a>
          <div className="notifi">
            0
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