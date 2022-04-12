import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { filterPriceProduct, getProduct } from '../../api/products'
import { addFavorite, deleteFavorite } from '../../features/FavoriteSlice'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

const AllProducts = () => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const getAll = async () => {
            const { data } = await getProduct()
            setProduct(data)
        }
        getAll()
    }, []);

    const handleSetProduct = (id, e) => {
        const favoriteP = product.filter(item => {
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



    useEffect(() => {
        $("#slider-range").slider({
            range: true,
            min: 100000,
            max: 20000000,
            values: [1000000, 5000000],
            slide: function (event, ui) {
                $("#amount").val(ui.values[0].toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " - " + ui.values[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
                // handlerFilterPrice(ui.values[0], ui.values[1])
            },
            stop: function (event, ui) {
                handlerFilterPrice(ui.values[0], ui.values[1])
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
            " - " + $("#slider-range").slider("values", 1).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
    }, [])
    useEffect(() => {
        const btn = document.querySelector('.select__price')
        btn.addEventListener('click', () => {
            btn.children[1].classList.toggle('none')
        })
    }, [])
    const handlerFilterPrice = (min, max) =>{
        const getAll = async () => {
            const { data } = await filterPriceProduct(min, max)
            setProduct(data)
            // console.log(data);
        }
        getAll()
    }
    return (
        <div>
            <main className="body__product">
                <div className="product__header">
                    <div className="proH__title">
                        <h3>Tất cả sản phẩm</h3>
                    </div>
                    <div className="proH__text1">
                        <p>({product?.length} sản phẩm)</p>
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
                            <p>Chọn mua những gì phù hợp với bạn</p>
                        </div>
                        {/* pagination */}
                        <div id="paging1" className="proC__paging">
                            <nav className="pages">
                                <li className="number__paging">
                                    <span className="numB numB__active">1</span>                      </li>
                            </nav>
                        </div>
                    </div>
                    <div className="proC__filters">
                        <form className="form__filter" method="POST">
                            <div className="select__price">
                                <div id="price" className="filter__title">
                                    <p>Giá</p>
                                    <i className="fas fa-chevron-down" />
                                </div>
                                <div className="box__filter__price none">
                                    {/* khi ng dùng thay đổi value input hidden -> show khoảng giá dưới trên range */}
                                    <p id="price_show">Từ 100 nghìn đến 50 triệu</p>
                                    <div>
                                        <input type="text" id="amount" readOnly style={{ width: 250, border: 0, color: '#f6931f', fontWeight: 'bold' }} />
                                        <div className="mt-1" id="slider-range" />
                                    </div>



                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="" id="test"></div> */}
                    <div className="proC__show">
                        <div className="proC__allItem">
                            {product?.map(item =>
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

export default AllProducts