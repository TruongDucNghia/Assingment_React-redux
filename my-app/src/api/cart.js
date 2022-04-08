import instance from "./instance";

export const addCartApi = (data) =>{
    const url = `/cart`
    return instance.post(url, data)
}

export const deleteCartApi = (id) =>{
    const url = `/cart/${id}`
    return instance.delete(url)
}