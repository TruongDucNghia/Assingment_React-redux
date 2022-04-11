import instance from "./instance";

export const getAllOrderApi = () =>{
    const url = `/orders`
    return instance.get(url)
}

export const addOrderApi = (data) =>{
    const url = `/orders`
    return instance.post(url, data)
}

export const updateOrderApi = (data) =>{
    const url = `/orders/${data.id}`
    return instance.patch(url, data)
}

export const deleteOrderApi = (id) =>{
    const url = `/orders/${id}`
    return instance.delete(url)
}