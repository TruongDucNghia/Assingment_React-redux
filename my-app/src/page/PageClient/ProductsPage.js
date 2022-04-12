import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { addFavorite, deleteFavorite } from '../../features/FavoriteSlice'
import { getProductsToCate } from '../../features/ProductSlice'


const ProductsPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsToCate(id))
    }, [id]);
    const products = useSelector((state) => state.product.value)


    const handleSetProduct = (id, e) => {
        const favoriteP = products.products.filter(item => {
            if (item.id === id) {
                return item
            }
        })
        if (e.target.classList.contains('fas')) {
            dispatch(deleteFavorite(id))
        } else {
            dispatch(addFavorite(favoriteP[0]))
        }
        // handleAddIcon()
    }
    const favorite = useSelector(state => state.favorite.value)


    
    return (
        <div>
            <main className="body__product">
                <div className="product__header">
                    <div className="proH__title">
                        <h3>{products?.name}</h3>
                    </div>
                    <div className="proH__text1">
                        <p>({products?.products?.length} sản phẩm)</p>
                    </div>
                    <div className="proH__text2">
                        <p>Bạn đang tìm kiếm những sản phẩm hoàn hảo phù hợp với mọi thứ hay chiếc váy dễ thương nhất lấy cảm
                            hứng từ
                            KOODING</p>
                    </div>
                </div>
                <div className="product__content">
                    <div className="proC__fist">
                        <div className="proC__title">
                            <p></p>
                        </div>
                        {/* pagination */}
                        <div id="paging1" className="proC__paging">
                            <nav className="pages">
                                <li className="number__paging">
                                    <span className="numB numB__active">1</span>                      </li>
                            </nav>
                        </div>
                    </div>
                    
                    {/* <div class="" id="test"></div> */}
                    <div className="proC__show">
                        <div className="proC__allItem">
                            {products?.products?.map((item, index) =>
                                <form key={index} className="proC__item">
                                    <div className="proC__item__img">
                                        <NavLink to={`/products/${item?.id}/${item.categoryId}/detail`}>
                                            <img src={item?.img} alt width="100%" />
                                        </NavLink>
                                    </div>
                                    <div className="proC__item__Name">
                                        <p>{item?.name}</p>
                                    </div>
                                    <div className="proC__item__PC">
                                        <div className="proC__item__price">
                                            <p>{Number(item?.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                        </div>

                                    </div>
                                    <div className="proC__love" onClick={(e) => handleSetProduct(item.id, e)}>
                                        <span className="proC__love__icon btn_add_fa">
                                            {/* // xử lí nếu sp đã tồn tại favo thì cho icon heart màu đỏ */}
                                            <i className={`far fa-heart ${favorite.map(fa => fa.id === item.id ? 'fas' : '').join('')}`} />

                                        </span>
                                    </div>
                                    {/* <div className="proC__sale">
                                    <p className="item__sale">-1%</p>
                                </div> */}
                                </form>)}


                        </div>
                        {/* end copy */}
                        <div className="proC__fist2">
                            {/* pagination */}
                            <div id="paging2" className="proC__paging">
                                <nav className="pages">
                                    <li className="number__paging">
                                        <span className="numB numB__active">1</span>                          </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default ProductsPage