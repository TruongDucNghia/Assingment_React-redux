import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteFavorite } from '../../features/FavoriteSlice'
import { ToastContainer, toast } from 'react-toastify';
import { addCarts } from '../../features/CartSlice';

const FavoritePage = () => {
    const products = useSelector(state => state.favorite.value)
    const isUser = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const tostMess = () => toast.error('Xóa thành công sản phẩm !')
    const handleDelete = (id) => {
        const action = window.confirm('Bạn có chắc muốn xóa chứ !')
        if (action) {
            dispatch(deleteFavorite(id))
            tostMess()
        }
    }
    const messUser = () => toast.error('Bạn phải đăng nhập trước khi thêm giỏ hàng !')
    const messErr = () => toast.error('Vui lòng chọn đầy đủ thuộc tính sản phẩm !')
    const messSucc = () => toast.success('Thêm sản phẩm vào giỏ hàng thành công !')
    useEffect(() =>{
        const listForm = document.querySelectorAll('.like__item')
        listForm.forEach(item =>{
            item.addEventListener('submit', (e) =>{
                e.preventDefault() 
                const color = [e.target[0].value]
                const size = [e.target[1].value]
                const quantity = +e.target[2].value
                const productId = +e.target[3].value
                const img = e.target[4].value
                const name = e.target[5].value
                const price = +e.target[6].value
                if(e.target[0].value === '' || e.target[1].value === ''){
                    messErr()
                }else if(!isUser.id){
                    messUser()
                }else{
                    const data = {productId ,name, price, img, color, size, quantity, userId: isUser.id}
                    dispatch(addCarts(data))
                    messSucc()
                    
                }
                
            })
        })
    }, [isUser])
    return (
        <div>
            <ToastContainer autoClose={1200} />
            <main className="body__like">
                <div className="title__like">
                    <h2 style={{ marginBottom: '20px' }}>Các mặt hàng yêu thích của bạn!</h2>
                </div>
                <div className="content__like">
                    <section className="like__Allitem">
                        {products?.map(item =>
                            <form key={item.id} className="like__item" method="POST">
                                <div className="c">
                                    <NavLink to={`/products/${item.id}/${item.categoryId}/detail`} className="like__img">
                                        <img src={item.img} alt width="100%" />
                                    </NavLink>
                                </div>
                                <div className="like__name">
                                    <p>{item.name}</p>
                                </div>
                                <div className="like__price">
                                    <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>
                                <div className="like__filters">
                                    {/* case -> save session */}
                                    <div className="like__filter__color">
                                        <select className="filter__select" name="color">
                                            <option selected value=''> Chọn màu sắc </option>
                                            {item?.color?.map(i =>
                                                <option key={i} value={i}>{i}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <select className="filter__select" name="size">
                                            <option selected value=''> Chọn kích cỡ </option>
                                            {item?.size?.map(i =>
                                                <option key={i} value={i}>{i}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <input type="number" name="quantity" defaultValue={1} className="filter__select" />
                                        <input type="hidden" name="pro_id" defaultValue={item.id} />
                                        <input type="hidden" name="pro_img" defaultValue={item.img} />
                                        <input type="hidden" name="pro_name" defaultValue={item.name} />
                                        <input type="hidden" name="pro_price" value={`${item.price}`} />
                                    </div>
                                </div>
                                <p onClick={() => handleDelete(item.id)} className="like__close">
                                    <i className="fa fa-times" aria-hidden="true" />
                                </p>
                                <div className="like__addCart">
                                    <button type="submit" name="action">Thêm vào giỏ hàng</button>
                                </div>
                            </form>
                        )}


                        <div className="itemm" />
                        <div className="itemm" />
                        <div className="itemm" />
                        <div className="itemm" />
                    </section>
                </div>
            </main>
        </div>

    )
}

export default FavoritePage