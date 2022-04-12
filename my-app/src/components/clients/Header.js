import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCategorys } from '../../features/CategorySlice'
import FormUser from './home/FormUser'

const Header = () => {
  const cate = useSelector((state) => state.category.value)
  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategorys())
  }, [])
  const handleSearch = (data) =>{
    reset()
    navigate(`/search/${data.cate}/${data.text}`)
    // console.log(data);

  }
  return (
    <div>
      <header>
        <div className="header-top swiper mySwiper">
          <div className="swiper-wrapper">
            <a href="#" className="swiper-slide slider-top1">
              {/* nếu có vourcher thì hiển thị nhiều nhất 2 cái */}
              Covid-19
            </a>
            <a href="#" className="swiper-slide slider-top2">Vận chuyển nhanh chóng và tin cậy 🚛</a>
          </div>
        </div>
        {/* end header-top */}
        <div className="header-main">
          <div className="box-header-main">
            <div className="box-header-main__start">
              <div className="bars">
                <div className="menu__bars">
                  <div className="btn__burger" />
                </div>
              </div>
              <NavLink to="/" className="logo">
                <img src="./img/logo-main.png"  className="logo-img" />
              </NavLink>
            </div>
            <div className="search">
              <form onSubmit={handleSubmit(handleSearch)}  className="form-search">
                <div className="pop-input">
                  <select {...register('cate')} className="filter-cate">
                    <option value="all">Tất cả</option>
                    {cate?.map(item => 
                      <option value={item.id}>{item.name}</option>
                    )}
                  </select>
                  <input {...register('text')} type="search" placeholder="Tìm kiếm" required />
                </div>
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
            <FormUser/>
          </div>
          <div className="header-menu">
            <ul className="sub-nav m-0">
              <li className="active"><a>
                <NavLink to='/'>Trang Chủ</NavLink>
              </a></li>
              <li><a>
                <NavLink to='/products/all'>#All</NavLink>
              </a></li>
              {cate?.map((item, index) => 
              <li><a>
                <NavLink key={index} to={`/products/${item.id}/${item.name}`}>{item.name}</NavLink>
              </a></li>)}
              <li><a>
                <NavLink to='/news'>Tin Tức</NavLink>
              </a></li>
              
              
              <li className="active"><a>#ALBUM</a></li>
            </ul>
          </div>
        </div>
        {/* end header-main */}
      </header>

    </div>
  )
}

export default Header