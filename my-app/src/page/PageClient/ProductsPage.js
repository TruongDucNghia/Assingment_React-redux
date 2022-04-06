import React from 'react'

const ProductsPage = () => {
    return (
        <div>
            <main className="body__product">
                <div className="product__header">
                    <div className="proH__title">
                        <p>Thời trang nam</p>
                    </div>
                    <div className="proH__text1">
                        <p>(11 mặt hàng)</p>
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
                                    <input type="hidden" name="min_price" id="hidden_minimum_price" defaultValue={0} />
                                    <input type="hidden" name="max_price" id="hidden_maximum_price" defaultValue={10000000} />
                                    <p id="price_show">
                                        Từ 10 nghìn đến 10 triệu                          </p>
                                    <div className="price_range" id="price_range">
                                    </div>
                                    {/* btn filter */}
                                    <button type="submit" className="text-center btn btn-secondary mt-2 form-control" name="btn_filter_price">Áp dụng</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="" id="test"></div> */}
                    <div className="proC__show">
                        <div className="proC__allItem">
                            <form action="productFavoriteClient" method="GET" className="proC__item">
                                <div className="proC__item__img">
                                    <a href="productDetail?action=viewDetail&id=84">
                                        <img src="./img/product1.jpg " alt width="100%" />
                                    </a>
                                </div>
                                <div className="proC__item__Name">
                                    <p>Cadigan</p>
                                </div>
                                <div className="proC__item__PC">
                                    <div className="proC__item__price">
                                        <p>2.480.000đ</p>
                                    </div>
                                    <div className="proC__item__color">
                                        <img src="public/images/layout/colorwheel-2.png" alt />
                                    </div>
                                </div>
                                <div onclick="showLove()" className="proC__love">
                                    <span className="proC__love__icon btn_add_fa">
                                        {/* // xử lí nếu sp đã tồn tại favo thì cho icon heart màu đỏ */}
                                        <i className="far fa-heart" />
                                        <input type="hidden" className="pro_id" name="pro_id" defaultValue={84} />
                                    </span>
                                </div>
                                <div className="proC__sale">
                                    <p className="item__sale">-1%</p>
                                </div>
                            </form>
                            
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