import instance from "./instance";

export const getSize = () =>{
    const url = `/size`
    return instance.get(url)
}

export const addProduct = (data) =>{
    const url = `/products`
    return instance.post(url, data)
}

export const getProduct = () => {
    const url = `/products`
    return instance.get(url)
}

export const deleteProduct = (id) =>{
    const url = `/products/${id}`
    return instance.delete(url)
}

export const getProductDetail = (id) =>{
    const url = `/products/${id}`
    return instance.get(url)
}

export const updateProduct = (data) =>{
    const url = `/products/${data.id}`
    return instance.put(url, data)
}