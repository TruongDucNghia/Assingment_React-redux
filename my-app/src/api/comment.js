import instance from "./instance";

export const addComment = (data) =>{
    const url = `/comments`
    return instance.post(url, data)
}

export const deleteComment = (id) =>{
    const url = `/comments/${id}`
    return instance.delete(url)
}

export const listComment = () =>{
    const url = `/comments`
    return instance.get(url)
}

export const getCommentsId = (id) =>{
    const url = `/products/${id}?_embed=comments`
    return instance.get(url)
}

export const getAllComment = () =>{
    const url = `/products/?_embed=comments`
    return instance.get(url)
}

export const getCommentDetail = (id) =>{
    const url = `/products/?_embed=comments&id=${id}`
    return instance.get(url)
}