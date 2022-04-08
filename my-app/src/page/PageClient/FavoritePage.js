import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteFavorite } from '../../features/FavoriteSlice'
import { ToastContainer, toast } from 'react-toastify';

const FavoritePage = () => {
    const products = useSelector(state => state.favorite.value)
    const dispatch = useDispatch()
    const tostMess = () => toast.error('Xóa thành công sản phẩm !')
    const handleDelete = (id) =>{
        const action = window.confirm('Bạn có chắc muốn xóa chứ !')
        if(action){
            dispatch(deleteFavorite(id))
            tostMess()
        }
    }
    return (
        <div>
            <ToastContainer  autoClose={1200}/>
            <main className="body__like">
                <div className="title__like">
                    <h2 style={{marginBottom: '20px'}}>Các mặt hàng yêu thích của bạn!</h2>
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
                                            {item?.color?.map(i => 
                                            <option key={i} value={i}>{i}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <select className="filter__select" name="size">
                                            {item?.size?.map(i => 
                                            <option key={i} value={i}>{i}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <input type="number" name="quantity" className="filter__select" defaultValue={1} id />
                                        <input type="hidden" name="pro_id" defaultValue={85} />
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