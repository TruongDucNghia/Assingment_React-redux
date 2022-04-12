import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { get3NewsApi } from '../../../api/news'
import { getList3news } from '../../../features/NewsSlice'

const List3News = () => {
    const dispatch = useDispatch()
    const news = useSelector((state) => state.news.value)
    useEffect(() =>{
        dispatch(getList3news())
    }, [])
    
    return (
        <div>
            <div className="news-main">
                <div className="col-news left">
                    <div className="news-item mb-4">
                        <NavLink to={`news/${news[0]?.id}/detail`} className="box-img">
                            <div className="box_newsImg">
                                
                                <img src={news[0]?.img} alt='' />
                            </div>
                        </NavLink>
                        <div className="pro-name">{news[0]?.title}</div>
                        <span>{news[0]?.shortDesc}</span>
                        <NavLink to={`news/${news[0]?.id}/detail`} className="btn-discover mt-2">
                            KHÁM PHÁ
                        </NavLink>
                    </div>
                    <div className="news-item mb-4">
                        <NavLink to={`news/${news[1]?.id}/detail`} className="box-img">
                            <div className="box_newsImg">
                                
                                <img src={news[1]?.img} alt='' />
                            </div>
                        </NavLink>
                        <div className="pro-name">{news[1]?.title}</div>
                        <span>{news[1]?.shortDesc}</span>
                        <NavLink to={`news/${news[1]?.id}/detail`} className="btn-discover mt-2">
                            KHÁM PHÁ
                        </NavLink>
                    </div>
                </div>
                <div className="col-news right">
                    <div className="news-item">
                        <NavLink to={`news/${news[2]?.id}/detail`} className="box-img">
                            <div className="box_newsImg ss2">
                                <img src={news[2]?.img} alt='' />
                            </div>
                        </NavLink>
                        <div className="pro-name">{news[2]?.title}</div>
                        <span>{news[2]?.shortDesc}</span>
                        <NavLink to={`news/${news[2]?.id}/detail`} className="btn-discover mt-2">
                            KHÁM PHÁ
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default List3News