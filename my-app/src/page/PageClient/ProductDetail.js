import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api/products'

const ProductDetail = () => {
    useEffect(() =>{
        const list = document.querySelectorAll('.content__detail__info')
        list.forEach((item) =>{
            // item.children[1].classList.remove('show__detail')
            item.addEventListener('click', () =>{
                item.children[1].classList.toggle('show__detail')
            })
        })
        
    }, [])
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    useEffect(() =>{
        const getProduct = async () =>{
            const {data} = await getProductDetail(id)
            setProduct(data)
            setColor(data.color)
            setSize(data.size)
        }
        getProduct()
    }, [])
    return (
        <div>
            <main className="body__details">
                <div className="product-page pt-4">
                    <div className="subnav-trail">
                        <a href="productClient?action=list">Mặt hàng</a>
                        <span className="divider">/</span>
                        <a href="#">Quần áo</a>
                        <span className="divider">/</span>
                        <a href="#">Chi tiết sản phẩm</a>
                    </div>
                    {/* <div class="" id="test"></div> */}
                </div>
                <div className="product-display">
                    <div className="pd-content">
                        <div className="pd-image">
                            {/* chứa slider và hình ảnh chi tiết */}
                            <div className="pd-image__left">
                                <div className="img__scroll">
                                    <button id="img1" className="thunb__img">
                                        <img src={product?.img} />
                                    </button>
                                </div>
                            </div>
                            <div className="pd-image__right">
                                <div className="img__right">
                                    <img src={product?.img} />
                                </div>
                            </div>
                        </div>
                        <div className="pd-info" id="pd-info">
                            {/* chứa thông tin chi tiết sp */}
                            <form className="pd__right" action="cartClient" method="POST" id="form-add-bag">
                                <input type="hidden" id="pro_id" name="id" defaultValue="<?= $data['pros']['id'] ?>" />
                                <div className="pd-info-head">
                                    <div className="pd-brand-sub"><span className="pd-brand-name"><a href="/mind-bridge/b/252">Brand:</a></span></div>
                                    <div className="pd-name">{product?.name}</div>
                                </div>
                                <div className="pd-price ">
                                    <div id="price-observer">
                                        <div className="default-price"><span className="currency lc" /><span className="number">{Number(product.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span></div>
                                        <div className="price__sale">
                                            {/* <span className="price__sale--fist">{product.price}</span> */}
                                            
                                        </div>
                                    </div>
                                    <div className="pd-sku">
                                        <p>Kho : 1000</p>
                                    </div>
                                </div>
                                <div className="pd-processing-time" data-nosnippet>
                                    <div className="rewards-wrap"><span className="rewards-amount-total">
                                        Đặt hàng thuận tiện, sản phẩm đa dạng, chất lượng cao cấp và nhận hàng cực kì nhanh chóng!
                                    </span></div>
                                </div>
                                <div className="pd-color">
                                    <label htmlFor="color">Chọn màu sắc</label> <br />
                                    <select name="color" id="color">
                                        {color.map(item => <option value={item}>{item}</option>)}
                                    </select>
                                    <div className="errC text-danger" />
                                </div>
                                <div className="pd-color">
                                    <div className="size">Kích cỡ</div>
                                    <select name="size" id="size">
                                        {size.map(item => <option value={item}>{item}</option>)}
                                    </select> <br />
                                    <div className="errS text-danger" />
                                    <a style={{ color: '#64abd6 !important' }} className="size-info" href="#2">Tôi nên lấy kích cỡ nào?</a>
                                </div>
                                <div className="pd-color">
                                    <div className="quantity">Số lượng</div>
                                    <input type="number" className="quantity" min={1} name="quantity" style={{ marginTop: 10, padding: '5px 5px', width: 70 }} defaultValue={1} id="quantity" />
                                    <div className="errQ text-danger" />
                                    <div className="errQty text-danger" />
                                </div>
                                <div className="msg" />
                                <div className="er" />
                                <div className="fav-forms-wrap">
                                    <div className="animate-button-wrap pd-buttons">
                                        <input type="hidden" id="storage" name="storage" defaultValue />
                                        <button type="submit" id="checkout_0" className="pd-checkout animate black loader">Thêm vào giỏ hàng</button>
                                        <span className=" btn_add_fa">
                                            <i className="far fa-heart" />
                                        </span>
                                    </div>
                                </div>
                                <div className="body__content__detail">
                                    <div className="content__detail__info">
                                        <div id={1} className="info__title">
                                            <p>Thông tin chi tiết</p>
                                            <div className="info__icon">
                                                <i className="fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="info__body">
                                            <p>Mô tả</p>
                                            <span>{product.description}</span>
                                        </div>
                                    </div>
                                    <div className="content__detail__info">
                                        <div id={2} className="info__title">
                                            <p>Kích thước &amp; phù hợp</p>
                                            <div className="info__icon">
                                                <i className="fas fa-plus minus" />
                                            </div>
                                        </div>
                                        <div className="info__body">
                                            <div className="info_table_size">
                                                <table className="tb_size">
                                                    <tbody>
                                                        <tr className="tb_title">
                                                            <th>Khích thước</th>
                                                            <th>inch</th>
                                                            <th>cm</th>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Vai</td>
                                                            <td>28.4</td>
                                                            <td>124.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Ngực</td>
                                                            <td>48.4</td>
                                                            <td>122.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Eo</td>
                                                            <td>48.4</td>
                                                            <td>124.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Lỗ cánh tay</td>
                                                            <td>18.4</td>
                                                            <td>24.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Tay áo</td>
                                                            <td>28.4</td>
                                                            <td>124.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Lỗ tay áo</td>
                                                            <td>18.4</td>
                                                            <td>24.0</td>
                                                        </tr>
                                                        <tr className="tb_item">
                                                            <td>Chiều dài</td>
                                                            <td>38.4</td>
                                                            <td>124.0</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__detail__info">
                                        <div id={3} className="info__title">
                                            <p>Vật chuyển và trả hàng</p>
                                            <div className="info__icon">
                                                <i className="fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="info__body">
                                            <p>Có thể trả lại trong vòng 14 ngày kể từ ngày giao hàng. Chính sách hoàn trả</p>
                                            <span>Miễn phí vận chuyển có sẵn trên toàn thế giới. Kiểm tra chính sách vận chuyển của chúng tôi để xem yêu cầu đặt hàng tối thiểu của quốc gia bạn. Chính sách vận chuyển .</span>
                                        </div>
                                    </div>
                                    <div className="content__detail__info">
                                        <div id={4} className="info__title">
                                            <p>Giới thiệu Kooding</p>
                                            <div className="info__icon">
                                                <i className="fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="info__body">
                                            <span>Đơn giản và bảo thủ, JUSTONE cung cấp một bộ sưu tập đầy đủ quần áo dành cho phụ nữ, thoải mái và không rắc rối. Từ áo phông cổ điển đến quần short và quần lọt khe dài, lựa chọn quần áo thiết thực của JUSTONE là lý tưởng cho cuộc sống hàng ngày.</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="box__slider__ct">
                        <p className="vclll">Bạn cũng có thể thích</p>
                        <div className="slider-album__content slick-initialized slick-slider slick-dotted"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false" style={{}}>Previous</button><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 1542, transform: 'translate3d(-257px, 0px, 0px)', transition: 'transform 500ms ease 0s' }}><div className="slick-slide" data-slick-index={0} aria-hidden="true" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" tabIndex={-1} style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={-1}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index={1} aria-hidden="false" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={0}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" role="tabpanel" id="slick-slide02" style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={0}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" role="tabpanel" id="slick-slide03" style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={0}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div><div className="slick-slide slick-active" data-slick-index={4} aria-hidden="false" role="tabpanel" id="slick-slide04" style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={0}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div><div className="slick-slide slick-active" data-slick-index={5} aria-hidden="false" role="tabpanel" id="slick-slide05" style={{ width: 242 }}><div><div className="image-item" style={{ width: '100%', display: 'inline-block' }}>
                            <a href="#" tabIndex={0}>
                                <div className="item__boxImg">
                                    <img src="./img/product1.jpg" />
                                </div>
                            </a>
                            <p>Envy Look Spoon Fur Fleeced Sweatshirt&gt;</p>
                            <span><b>2.000.000 VND</b></span>
                        </div></div></div></div></div><button className="slick-next slick-arrow slick-disabled" aria-label="Next" type="button" style={{}} aria-disabled="true">Next</button><ul className="slick-dots" style={{}} role="tablist"><li className role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabIndex={-1}>1</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabIndex={0} aria-selected="true">2</button></li></ul></div>
                    </div>
                    <div className="sp-title">
                        <p className="vclll">Hình ảnh chi tiết</p>
                        <div className="full-images">
                            <div className="full__box__img">
                                <div className="pd__item__img">
                                    <img src={product.img} width="100%" />
                                </div>
                            </div>
                            <div className="gallery_pros">
                                <div className="control_pros_close">
                                    <i className="fas fa-times" />
                                </div>
                                <div className="gallery_pros_img">
                                    <img src="./public/images/products/0c7a6702fb366f8e1047ea5b3bd0eda64b812378 - Copy.jpg" />
                                </div>
                                <div className="control_pros prev">
                                    <i className="fas fa-chevron-left" />
                                </div>
                                <div className="control_pros next">
                                    <i className="fas fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div></main>
        </div>

    )
}

export default ProductDetail