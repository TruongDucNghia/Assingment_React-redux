import instance from "./instance";

export const addCategory = (data) =>{
    const url = `/category`
    return instance.post(url, data)
}


export const UpdateCategory = (data) =>{
    const url = `/category/${data.id}`
    return instance.put(url, data)
}

export const getCategory = () =>{
    const url = `/category`
    return instance.get(url)
}

export const getCategoryDetail = (id) =>{
    const url = `/category/${id}`
    return instance.get(url)
}

export const deleteCategory = (id) =>{
    const url = `/category/${id}`
    return instance.delete(url)
}