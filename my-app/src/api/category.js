import instance from "./instance";

export const addCategory = (data) =>{
    const url = `/categorys`
    return instance.post(url, data)
}


export const UpdateCategory = (data) =>{
    const url = `/categorys/${data.id}`
    return instance.put(url, data)
}

export const getCategory = () =>{
    const url = `/categorys`
    return instance.get(url)
}

export const getCategoryDetail = (id) =>{
    const url = `/categorys/${id}`
    return instance.get(url)
}

export const deleteCategory = (id) =>{
    const url = `/categorys/${id}`
    return instance.delete(url)
}