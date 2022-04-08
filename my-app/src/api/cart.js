import instance from "./instance";

export const addCartApi = (data) =>{
    const url = `/cart`
    return instance.post(url, data)
}

