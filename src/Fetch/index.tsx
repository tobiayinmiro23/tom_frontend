import axios from "axios";
import { getAllPhotosI, loadMorePhotosI, allPhotosMappedT, getPhotoI, signinI, addCommentI, commentI } from "../Types";

// get all photos
export function GetAllPhotos({ setloading, setdataReady, setresult, seterror, page }: getAllPhotosI) {
    setloading(true)
    setdataReady(false)
    setresult(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.unsplash.com/photos/?client_id=3ALI7oiWjQD3B2aqBzlqsJL64T_-9qsknDF6KWFYoEU&page=${page}&per_page=12`
    };
    axios.request(options).then(res => {
        setloading(false)
        setresult(res?.data)
        setdataReady(true)
    }).catch(() => {
        setloading(false)
        seterror(true)
        setdataReady(false)
    })
}
// for loading more photos
export function LoadMorePhotos({ setloadMore, result, page }: loadMorePhotosI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://api.unsplash.com/photos/?client_id=3ALI7oiWjQD3B2aqBzlqsJL64T_-9qsknDF6KWFYoEU&page=${page}&per_page=12`
    };
    axios.request(options).then(res => {
        res?.data.map((item: allPhotosMappedT) => result?.push(item))
        setloadMore(false)
    }).catch(() => {
        setloadMore(false)
    })
}
// for fetching information about a single photo
export function GetPhoto({ setloading, photoid, seterror, setphoto }: getPhotoI) {
    setloading(true)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.unsplash.com/photos/${photoid}?client_id=3ALI7oiWjQD3B2aqBzlqsJL64T_-9qsknDF6KWFYoEU`
    };
    axios.request(options).then(res => {
        setloading(false)
        setphoto(res?.data)
    }).catch(()=>{
        seterror(true)
        setloading(false)
    }
    )
}
// for signing up
export const Signin = async ({ username, password, setloading, route, seterror }: signinI) => {
    setloading(true)
    try {
        let response = axios({
            method: 'post',
            url: `https://tom-backend-sibt.onrender.com/${route}`,
            data: {
                username,
                password
            }
        })
        let data = await response
        setloading(false)
        return data.data
    } catch {
        setloading(false)
        seterror(true)
    }
}
export const AddComment = async ({ username, comments, photoid, usersid, setloading, route, seterror }: addCommentI) => {
    setloading(true)
    try {
        let response = axios({
            method: 'POST',
            url: `https://tom-backend-sibt.onrender.com/${route}`,
            data: {
                username,
                comments,
                photoid,
                usersid
            }
        })
        let data = await response
        setloading(false)
        return data.data
    } catch {
        setloading(false)
        seterror(true)
    }

}
export const UpdateComment = async ({ comments, commentid, setloading, photoid, route, seterror }: commentI) => {
    setloading(true)
    try {
        let response = axios({
            method: 'PUT',
            url: `https://tom-backend-sibt.onrender.com/${route}`,
            data: {
                comments,
                commentid,
                photoid
            }
        })
        let data = await response
        setloading(false)
        return data.data
    } catch {
        setloading(false)
        seterror(true)
    }

}
export const DeleteComment = async ({ commentid, setloading, route, seterror }: commentI) => {
    setloading(true)
    try {
        let response = axios({
            method: 'delete',
            url: `https://tom-backend-sibt.onrender.com/${route}`,
            data: {
                commentid
            }
        })
        let data = await response
        setloading(false)
        return data.data
    } catch {
        setloading(false)
        seterror(true)
    }
}
export const GetComment = async ({ setloading, route, seterror }: commentI) => {
    setloading(true)
    try {
        let response = axios({
            method: 'get',
            url: `https://tom-backend-sibt.onrender.com/${route}`,
        })
        let data = await response
        setloading(false)
        let reversedData = data.data.message.reverse()

        return reversedData
    } catch {
        setloading(false)
        seterror(true)
    }
}
