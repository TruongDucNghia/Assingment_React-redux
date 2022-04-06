import instance from "./instance";

export const getNewsApi = () =>{
    const url = `/news`
    return instance.get(url)
}

export const addNewsApi = (data) =>{
    const url = `/news`
    return instance.post(url, data)
}

export const deleteNewsApi = (id) =>{
    const url = `/news/${id}`
    return instance.delete(url)
}

export const updateNewsApi = (data) =>{
    const url = `/news/${data.id}`
    return instance.put(url, data)
}

export const getNewsDetailApi = (id) =>{
    const url = `/news/${id}`
    return instance.get(url)
}

export const get3NewsApi = () =>{
    const url = `/news?_sort=createdAt&_order=desc&_limit=3`
    return instance.get(url)
}