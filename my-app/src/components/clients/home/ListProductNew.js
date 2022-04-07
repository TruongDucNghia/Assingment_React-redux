import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import { get10ProductNew } from '../../../api/products'

const ListProductNew = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const getProduct = async () =>{
            const {data} = await get10ProductNew()
            setProducts(data)
        }
        getProduct()
    }, [])
    return (
        <div className="product-news">
            <div className="product-news__title mb-3">
                <div className="title-text">
                    mới: 10+ sản phẩm mới hàng ngày
                </div>
                {/* <div class="toggle-filter " style="display: flex;align-items: center;">
                  <span class="pb-2 pr-3">Nam</span>
                  <div class="ckbx-style-8">
                      <input type="checkbox" id="filter_new" value="0" name="ckbx-style-8">
                      <label for="filter_new"></label>
                  </div>
                  <span class="pb-2 pl-4">Nữ</span>
              </div> */}
            </div>
            <div className="slick__slider">
                <Slider {...settings} className="pro-news-slider">
                    {products?.map(item => 
                    <NavLink key={item.id} to={`/products/${item.id}/${item.categoryId}/detail`} className="pro-news-item">
                        <img src={item.img} />
                        <div className>
                            <div className="pro-name bg-white pt-2 text-center">
                                {item.name}
                            </div>
                            <div className="pro-des bg-white">
                                <span>{item.description.slice(0, 20)}</span>
                            </div>
                        </div>
                    </NavLink>)}
                    
                    
                </Slider>
            </div>
        </div>

    )
}

export default ListProductNew