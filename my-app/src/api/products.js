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
    return instance.patch(url, data)
}

export const get10ProductNew = () =>{
    const url = `/products?_sort=createdAt&_order=desc&_limit=10`
    return instance.get(url)
}

export const getProductsCate = (id) =>{
    const url = `/categorys/${id}?_embed=products`
    return instance.get(url)
}