import instance from "./instance";

export const signin = (data) =>{
    const url = `/signin`
    return instance.post(url, data)
}


export const signup = (data) =>{
    const url = `/signup`
    return instance.post(url, data)
}