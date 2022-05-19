import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addComments, getComments } from '../../../features/CommentSlice'
const Comment = () => {
    const dispatch = useDispatch()
    const isUser = useSelector(state => state.user.value)
    useEffect(() => {
        dispatch(getComments())
    }, [])
    const listComment = useSelector(state => state.comment.value)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [img, setImg] = useState('')
    const [error, setError] = useState('')
    const onSubmit = (data) => {
        if (isUser.length === 0) {
            setError('Bạn phải đăng nhập để bình luật !')
        } else {
            const username = isUser.username
            const userId = isUser.id
            const createdAt = new Date().getTime()
            const datas = { ...data, img, username, userId, createdAt }
            dispatch(addComments(datas))
            reset()
            setImg('')
        }
    }
    async function handleGetImg(e) {
        const file = e.target.files[0]
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
        const formData = new FormData()

        formData.append('file', file);
        formData.append('upload_preset', "cyfbktyp");
        const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
                "Content-Type": "application/form-data"
            }
        });
        setImg(response.data.url)
        // document.querySelector('#imgNow').src = response.data.url
    }
    return (
        <div className="form__comment">
            <div className="form__top" style={{ display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input__comment">
                        <div className="avatar__comment">
                            <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg" alt width="100%" />
                        </div>
                        <div className="input__keys">
                            <input {...register('content', { required: true })} type="text" name="content" placeholder="Bình luận của bạn" />
                            <div className="input__image">
                                <input onChange={handleGetImg} type="file" name="image" defaultValue="" />
                            </div>
                            <div className="sub__comment">
                                <button name="btn_cmt" type="submit"><i className="fas fa-paper-plane" /></button>
                            </div>
                        </div>
                    </div>
                </form>
                <img style={{ marginLeft: '65px' }} id='imgNow' src={img} width='150px' />
                <p style={{ color: 'red', marginLeft: '65px' }}>{errors.content?.type === 'required' && 'Bạn phải nhập nội dung của bạn !'}</p>
                <p style={{ color: 'red', marginLeft: '65px' }}>{error}</p>
            </div>
            <div className="form__content">
                <div className="comment__itemAll">
                    {listComment.map((item, index) =>
                        <div style={{marginTop: '15px'}} key={index} className="item__comment">
                            <div className="item__ava">
                                <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg" alt width="100%" />
                            </div>
                            <div className="item__right">
                                <div className="item__name">
                                    <p>{item.username}</p>
                                </div>
                                <div className="item__time">
                                    <i>{new Date(item.createdAt).toLocaleString()}</i>
                                </div>
                                <div className="item__nd">
                                    <p>{item.content}</p>
                                </div>
                                <div className="item__img">
                                    <img src={item.img} alt width="100%" />
                                </div>
                                <div className="item__more">
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Comment