import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
                        <a href="newsClient?action=viewDetail&id=13" className="box-img">
                            <div className="box_newsImg">
                                
                                <img src={news[0]?.img} alt='' />
                            </div>
                        </a>
                        <div className="pro-name">{news[0]?.title}</div>
                        <span>{news[0]?.shortDesc}</span>
                        <a href="newsClient?action=viewDetail&id=13" className="btn-discover mt-2">
                            KHÁM PHÁ
                        </a>
                    </div>
                    <div className="news-item mb-4">
                        <a href="newsClient?action=viewDetail&id=10" className="box-img">
                            <div className="box_newsImg">
                                
                                <img src={news[1]?.img} alt='' />
                            </div>
                        </a>
                        <div className="pro-name">{news[1]?.title}</div>
                        <span>{news[1]?.shortDesc}</span>
                        <a href="newsClient?action=viewDetail&id=10" className="btn-discover mt-2">
                            KHÁM PHÁ
                        </a>
                    </div>
                </div>
                <div className="col-news right">
                    <div className="news-item">
                        <a href="newsClient?action=viewDetail&id=10" className="box-img">
                            <div className="box_newsImg ss2">
                                <img src={news[2]?.img} alt='' />
                            </div>
                        </a>
                        <div className="pro-name">{news[2]?.title}</div>
                        <span>{news[2]?.shortDesc}</span>
                        <a href="newsClient?action=viewDetail&id=10" className="btn-discover mt-2">
                            KHÁM PHÁ
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default List3News