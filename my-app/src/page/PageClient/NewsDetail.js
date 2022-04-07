import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getNewsDetailApi } from '../../api/news'
import { getList3news } from '../../features/NewsSlice'
import '../../newsDetail.css'
const NewsDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [news, setNews] = useState([])
    const list3New = useSelector(state => state.news.value)
    useEffect(() =>{
        const getNews = async () =>{
            dispatch(getList3news())
            const {data} = await getNewsDetailApi(id)
            setNews(data)
        }
        getNews()
    }, [id])

    return (
        <div className='container'>
            <div className="mainheading">
                <h1 className="sitetitle"><NavLink to="/news">Blog Kooding</NavLink></h1>
                <div className='imgBanner'>
                    <img src={news.img}/>
                </div>
                <p className="lead">
                    {news.title}
                </p>
            </div>
            <div className="conten_news">
                <p>{news.content}</p>
            </div>
                <p style={{marginTop: '15px'}}>Tác giả: {news.author}</p>
            <div className="graybg">
                <div className="container">
                    <div className="row listrecent listrelated">
                        {list3New?.map((item, index) => 
                            <div key={index} className="col-md-4">
                                <div className="card">
                                    <NavLink className='post_link_img' to={`/news/${item.id}/detail`}>
                                        <img className="img-fluid img-thumb" src={item.img} alt />
                                    </NavLink>
                                    <div className="card-block">
                                        <h2 className="card-title"><NavLink to={`/news/${item.id}/detail`}>{item.title.slice(0, 50)}...</NavLink></h2>
                                        <h4 className="card-text">
                                            {item.content.slice(0, 50)}...
                                        </h4>
                                        <div className="metafooter">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* end post */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsDetail