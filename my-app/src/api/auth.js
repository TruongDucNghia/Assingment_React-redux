import instance from "./instance";

export const signin = (data) =>{
    const url = `/signin`
    return instance.post(url, data)
}


export const signup = (data) =>{
    const url = `/signup`
    return instance.post(url, data)
}

export const updateUserApi = (data) =>{
    const url = `/users/${data.id}`
    return instance.patch(url, data)
}

export const listUserApi = () =>{
    const url = `/users`
    return instance.get(url)
}

export const deleteUserApi = (id) =>{
    const url = `/users/${id}`
    return instance.delete(url)
}