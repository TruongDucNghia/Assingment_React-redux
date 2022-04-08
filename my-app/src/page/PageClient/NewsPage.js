import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { get4NewsApi, getNewsApi } from '../../api/news'
import '../../news.css'

const NewsPage = () => {
    const [list4News, setList4News] = useState([])
    const [news, setNews] = useState([])
    useEffect(() =>{
        const getNews = async () =>{
            const {data} = await get4NewsApi()
            const news = await getNewsApi()
            setNews(news.data)
            setList4News(data)
        }
        getNews()
    }, [])
    
    return (
        <div>
            <main className="container">
                <div className="mainheading">
                    <h1 className="sitetitle"><a href="index.html">Blog Kooding</a></h1>
                    <p className="lead">
                        Cập nhận tin tức mới nhất của chúng tôi để biết thêm nhiều chương trình khuyến mãi
                    </p>
                </div>
                <section className="featured-posts">
                    <div className="section-title">
                        <h2><span>Bài viết mới nhất</span></h2>
                    </div>
                    <div className="card-columns listfeaturedtag">
                        {list4News?.map((item, index) => 
                            <div key={index} className="card">
                                <div className="row">
                                    <div className="col-md-5 wrapthumbnail">
                                        <NavLink to={`/news/${item.id}/detail`}>
                                            {/* <img className='thumbnail' src={item.img}/> */}
                                            <div className="thumbnail" style={{ backgroundImage: `url(${item.img})` }}>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-block">
                                            <h2 className="card-title"><a href="newsClient?action=viewDetail&id=14">{item.title}</a></h2>
                                            <h4 className="card-text">{item.shortDesc.slice(0, 50)}...</h4>
                                            <div className="metafooter">
                                                <div className="wrapfooter">
                                                    <span className="author-meta">
                                                        <span className="post-name">{item.author}</span><br />
                                                        <span className="post-date">{new Date(item.createdAt).toLocaleString()}</span><span className="post-read" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        )}
                    </div>
                </section>
                <section className="recent-posts">
                    <div className="section-title">
                        <h2><span>Tất cả bài viết</span></h2>
                    </div>
                    <div className="card-columns listrecent">
                        {/* begin post */}
                        {news?.map((item, index) =>
                            <div key={index} className="card">
                                <NavLink to={`/news/${item.id}/detail`}>
                                    <div className="img_huan_hoa_hong">
                                        <img className="img-fluid" src={item.img} alt />
                                    </div>
                                </NavLink>
                                <div className="card-block">
                                    <h2 className="card-title"><a href="">{item.title}</a>
                                    </h2>
                                    <h4 className="card-text">{item.shortDesc.slice(0, 50)}...</h4>
                                    <div className="metafooter">
                                        <div className="wrapfooter">
                                            <span className="author-meta">
                                                <span className="post-name">{item.author}</span><br />
                                                <span className="post-date">{new Date(item.createdAt).toLocaleString()}</span><span className="post-read" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </section>
            </main>
        </div>

    )
}

export default NewsPage