import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { logout, updateUser } from '../../features/UserSlice'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import OrderPage from '../../components/clients/home/OrderPage';

const Profile = () => {
    const { register, handleSubmit, formState:{errors}, reset} = useForm()
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toastMess = () => toast.success('Cập nhập tài khoản thành công !')
    useEffect(() =>{
        reset(user)
    }, [])
    const onSubmit = (data) => {
        // const action = window.confirm('Nếu bạn cập nhật tài khoản bị phải đăng nhập lại ?')
        // if(action){
            
        //     // dispatch(logout())
        //     // navigate('/')
        // }
        dispatch(updateUser(data))
        toastMess()
    }
    useEffect(() =>{
        const me = document.querySelector('#changePass');
        const show = document.querySelector('#show')
        me?.addEventListener('click', () =>{
            show?.classList.toggle('show')
        })
        // end
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
    
        const tabs = $$('.acc__menu__item');
        const panes = $$('.acc__tab__menu');
        const titles = $$('.acc__title__fist')
    
        // line.style.left = tabActive.offsetLeft + 'px'
        // line.style.width = tabActive.offsetWidth + 'px'
    
        tabs.forEach((tab, index) => {
            const pane = panes[index]
            const title = titles[index]
            tab.addEventListener('click', (e) =>{
              e.preventDefault();
              $('.acc__menu__item.active')?.classList.remove('active');
              $('.acc__tab__menu.active')?.classList.remove('active');
              $('.acc__title__fist.active')?.classList.remove('active');
              // line.style.left = this.offsetLeft + 'px'
              // line.style.width = this.offsetWidth + 'px'
              tab.classList.add('active')
              pane.classList.add('active')
              title.classList.add('active')
            })
            
        })   
      }, [])
    return (
        <div>
            <ToastContainer autoClose={1200} />
            <main className="body__acc">
                <div className="body__acc__header">
                    <div className="body__acc__fist">
                        <div className="body__acc__title">
                            <div className="acc__title__fist active">
                                <p>Thông tin tài khoản</p>
                            </div>
                            <div className="acc__title__fist ">
                                <p>Đơn hàng</p>
                            </div>
                            <div className="acc__title__text mt-3">
                                <p>Chào mừng bạn trở lại Trần Thị Thanh Huê</p>
                            </div>
                        </div>
                        <div className="body__acc__menu">
                            <div className="acc__show__menu" onclick="menu();">
                                <div className="show__menu__title">
                                    <p>Bảng Điều Khiển</p>
                                </div>
                                <div className="show__menu__icon">
                                    <i className="fa fa-angle-down" aria-hidden="true" />
                                </div>
                            </div>
                            <nav className="acc__allmenu show__menu">
                                <div className="acc__menu__item active">
                                    <a href>Thông tin tài khoản</a>
                                </div>
                                <div className="acc__menu__item">
                                    <a href>Đơn hàng</a>
                                </div>
                                <div className="acc__line" />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="body__acc__content">
                    <div className="acc__tab__menu active">
                        <div className="acc__menu__content">
                            <div className="acc__donhang">
                                <div className="acc__DH__title">
                                    <p>Thông tin tài khoản của bạn</p>
                                </div>
                                <div className="acc__DH__content1">
                                    <div className="DH__title">
                                        <p>Đăng nhập xã hội: </p>
                                        <img src="img/fb-logo-col.svg" className />
                                    </div>
                                    <div className="DH__form">
                                        <form onSubmit={handleSubmit(onSubmit)} id="form_profile">
                                            <div className="DH__form1">
                                                <label htmlFor>Họ và tên</label>
                                                <input {...register('username', {required: true})} type="text" />
                                                <p style={{ color: 'red' }}>{errors.username?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                                            </div>
                                            
                                            <div className="DH__form1">
                                                <label htmlFor>E-mail <i>* Nơi bạn nhận được thông tin đặt hàng.</i></label>
                                                <input {...register('email', {required: true})} type="email" disabled />
                                                <p style={{ color: 'red' }}>{errors.email?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                                            </div>
                                            <div className="DH__form1">
                                                <label htmlFor>Số điện thoại</label>
                                                <input {...register('phone', {required: true})} type="text" name="phone"  />
                                                <p style={{ color: 'red' }}>{errors.phone?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                                            </div>
                                            <div className="DH__form1">
                                                <label htmlFor>Ngày sinh</label>
                                                <input {...register('birthday', {required: true})} type="date" name="birthday" />
                                                <p style={{ color: 'red' }}>{errors.birthday?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                                            </div>
                                            <div className="DH__form2">
                                                <label className="sex__text" htmlFor>Giới tính</label>
                                                <div className="DH__checkBox">
                                                    <div className="pretty p-default">
                                                        <input {...register('gender', {required: true})} defaultChecked={user.gender.includes('1')} type="radio" value={'0'}  />
                                                        <div className="state p-info">
                                                            <label htmlFor="nam">Nam</label>
                                                        </div>
                                                    </div>
                                                    <div className="pretty p-default">
                                                        <input {...register('gender', {required: true})} defaultChecked={user.gender.includes('0')} type="radio" value={'1'} />
                                                        <div className="state p-info">
                                                            <label htmlFor="nu">Nữ</label>
                                                        </div>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{errors.gender?.type === 'required' && "Bạn không được để trống trường này !"}</p>
                                                </div>
                                            </div>
                                            <div className="DH__submit">
                                                <button type="submit" name="btn_update">Lưu thông tin của tôi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="acc__tab__menu">
                        <OrderPage/>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Profile