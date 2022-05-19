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