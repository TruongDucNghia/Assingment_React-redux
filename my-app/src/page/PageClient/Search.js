import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { filterSearchProduct } from '../../api/products'
import { addFavorite, deleteFavorite } from '../../features/FavoriteSlice'
import { getProducts } from '../../features/ProductSlice'

const Search = () => {
    const dispatch = useDispatch()
    const {cate, text} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProduct = async (cate, text) =>{
            const {data} = await filterSearchProduct(cate, text)
            setProducts(data)
        }
        getProduct(cate, text)
    }, [cate, text])
    const handleSetProduct = (id, e) => {
        const favoriteP = products.filter(item => {
            if (item.id === id) {
                return item
            }
        })
        if (e.target.classList.contains('fas')) {
            dispatch(deleteFavorite(id))
        } else {
            dispatch(addFavorite(favoriteP[0]))
        }
    }
    const favorite = useSelector(state => state.favorite.value)
    return (
        <div>
            <main className="body__product">
                <div className="product__header">
                    <div className="proH__title">
                        <p>Kết quả tìm kiếm của bạn cho:</p>
                        <h3>'{text}'</h3>
                    </div>
                    <div className="proH__text1">
                        <p>({products?.length} sản phẩm)</p>
                    </div>
                    <div className="proH__text2">
                        <p>Bạn đang tìm kiếm những sản phẩm hoàn hảo phù hợp với mọi thứ hay chiếc váy dễ thương nhất lấy cảm
                            hứng từ
                            KOODING</p>
                    </div>
                </div>
                <div className="product__content">
                    
                    {/* <div class="" id="test"></div> */}
                    <div className="proC__show">
                        <div className="proC__allItem">
                            {products?.map(item =>
                                <form className="proC__item">
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
                            
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Search