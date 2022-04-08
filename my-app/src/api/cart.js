import instance from "./instance";

export const addCartApi = (data) =>{
    const url = `/cart`
    return instance.post(url, data)
}

export const deleteCartApi = (id) =>{
    const url = `/cart/${id}`
    return instance.delete(url)
}

export const updateCartApi = (data) =>{
    const url = `/cart/${data.id}`
    return instance.patch(url, data)
}