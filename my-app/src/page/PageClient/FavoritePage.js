import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const FavoritePage = () => {
    const products = useSelector(state => state.favorite.value)
    return (
        <div>
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
                                    <p>{item.price}</p>
                                </div>
                                <div className="like__filters">
                                    {/* case -> save session */}
                                    <div className="like__filter__color">
                                        <select className="filter__select" name="color">
                                            <option value={3}>ĐEN</option>
                                            <option value={4}>TRẮNG</option>
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <select className="filter__select" name="size">
                                            <option value={2}>M</option>
                                            <option value={11}>XXL</option>
                                        </select>
                                    </div>
                                    <div className="like__filter__color">
                                        <input type="number" name="quantity" className="filter__select" defaultValue={1} id />
                                        <input type="hidden" name="pro_id" defaultValue={85} />
                                    </div>
                                </div>
                                <a href="productFavoriteClient?action=del&id=85" onclick="showError();" className="like__close">
                                    <i className="fa fa-times" aria-hidden="true" />
                                </a>
                                <div onclick="showSuccess();" className="like__addCart">
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