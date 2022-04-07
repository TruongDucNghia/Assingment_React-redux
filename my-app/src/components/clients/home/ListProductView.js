import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { get10ProductView } from '../../../api/products'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

const ListProductView = () => {
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
    const handleTimes = () =>{
        $('.site__intro').removeClass('show1');
        $('.background__overlay').addClass('none');
        $('.btn__times').addClass('none');
        $('.btn__minus').removeClass('none');
    }
    const handleMinus = () =>{
        $('.btn__times').removeClass('none');
        $('.btn__minus').addClass('none');
        $('.site__intro').addClass('show1');
        $('.background__overlay').removeClass('none');
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await get10ProductView()
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <div>
            <div className="product-news trending">
                <div className="product-news__title mb-3">
                    <div className="title-text">
                        ĐANG LÀ XU HƯỚNG
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
                <div className="slick__slider ">
                    <Slider {...settings} className="pro-news-slider ">
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

            <div className="about-us" id="introduce">
                <div className="title text-center">
                    <h5>KOODING Kết nối thời trang Hàn Quốc với bạn</h5>
                </div>
                <div className="btn__times" onClick={() => handleTimes()}>+</div>
                <div className="btn__minus none" onClick={() => handleMinus()}>-</div>
                <div className="background__overlay"></div>
                <div className="site__intro show1">
                    <p>Chào mừng đến với KOODING.com, thị trường toàn cầu trực tuyến hàng đầu. Mục tiêu của chúng tôi là để mọi người không chỉ kết nối trên toàn cầu thông qua tình yêu của họ về phong cách Hàn Quốc, mà còn để cung cấp truy cập nhanh đến mới nhất thời trang phụ nữ Hàn Quốc , thời trang nam Hàn Quốc , và Hàn Quốc vẻ đẹp sản phẩm và thương hiệu trên toàn thế giới với chi phí thấp nhất và với không rắc rối vận chuyển trên toàn thế giới. Trên tất cả, chúng tôi cố gắng cung cấp cho cộng đồng KOODING những sản phẩm cao cấp được tìm thấy tại các cửa hàng Hàn Quốc với giá cả phải chăng nhất.</p>
                    <p>KOODING cung cấp những mặt hàng quần áo châu Á trực tuyến tốt nhất và là nơi có thể mua sắm bất cứ thứ gì liên quan đến thời trang Hàn Quốc. Từ thời trang đường phố đến quần áo hàng hiệu cao cấp, chúng tôi giúp việc mua sắm trực tuyến của người Hàn Quốc trở nên dễ dàng hơn bao giờ hết. Tại đây, bạn có thể tìm thấy mọi thứ, từ áo hoodie và áo nỉ thoải mái, những chiếc váy đáng yêu, áo khoác và áo len cổ lọ sành điệu và ấm áp, cùng những chiếc quần jean và quần âu mới yêu thích của bạn. Chúng tôi mang các thương hiệu quần áo Hàn Quốc đích thực như Chuu , NANING9 , Cherrykoko , BASIC HOUSE , MIND BRIDGE , OPEN THE DOOR , REDHOMME , v.v. Bất kể phong cách ưa thích của bạn là gì, bạn chắc chắn có thể tìm thấy trang phục mơ ước của mình với những bộ quần áo đến từ Hàn Quốc này.</p>
                    <p>KOODING không chỉ là một cửa hàng thời trang trực tuyến của Hàn Quốc; trên thực tế, chúng tôi không chỉ là quần áo theo phong cách Hàn Quốc và còn cung cấp những sản phẩm làm đẹp tuyệt vời nhất , album K-pop , đồ trang sức và phụ kiện hoàn thiện và bổ sung cho mọi khía cạnh trong lối sống của bạn.</p>
                    <p>Chúng tôi mỹ phẩm Hàn Quốc , trang điểm , và chăm sóc da sản phẩm cho phép bạn đặt khuôn mặt tốt nhất của bạn về phía trước. Các thương hiệu như SNP , Ariul , RiRe , Evercell by Chaum , XYZ và MILLION RED là nhà sản xuất công thức cải tiến trong trang điểm và chăm sóc da sử dụng những gì tốt nhất trong bí quyết làm đẹp của Hàn Quốc. Ở đây, bạn có thể mua sắm mặt nạ tấm mặt , chất tẩy rửa , toner , huyết thanh , kem lên mặt , Hàn Quốc phong cách sắc thái màu môi , đệm hiệp ước, và mọi thứ khác bạn cần để có được vẻ ngoài trang điểm tự nhiên, hoàn thành quy trình chăm sóc da 10 bước , duyệt theo loại da của bạn hoặc điều trị các vấn đề về da của bạn .</p>
                    <p>Hãy đến để tìm ra nơi cuộc sống của bạn đưa bạn đến tại KOODING! Vui lòng duyệt qua trang web của chúng tôi và xem các phong cách thời trang Hàn Quốc mới nhất và tuyệt vời nhất từ ​​cửa hàng thời trang trực tuyến yêu thích mới của bạn. Với khả năng phục vụ hơn 100 quốc gia, chúng tôi đảm bảo bạn sẽ có trải nghiệm mua sắm dễ dàng.</p>        </div>
            </div>
        </div>
    )
}

export default ListProductView