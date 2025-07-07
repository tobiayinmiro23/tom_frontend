
export interface generalContextI {
    username: string
    userid: string
    setusername: (data: string) => void
    setuserid: (data: string) => void
}
export interface loginI {
    message: string
    status: string
}
export type allPhotosT = [{
    user: {
        username: string
    }
    alt_description: string
    description: string
    id: string
    urls: {
        small: string
        full?: string
    }
}]
export interface allPhotosMappedT {
    user: {
        username: string
    }
    alt_description: string
    description: string
    id: string
    urls: {
        small: string
        full?: string
    }
}
export interface cardI {
    result: allPhotosT | null
    page: number
    setpage: (page: number) => void
}


export type photoT = {
    user: {
        username: string
    }
    alt_description: string
    description: string
    id: string
    urls: {
        small: string
        full?: string
    }
    tags: [
        { title: string }
    ]
}

export interface getAllPhotosI {
    setloadMore?: React.Dispatch<React.SetStateAction<boolean>>
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresult: (data: allPhotosT | null) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    page: number
}
export interface loadMorePhotosI {
    setloadMore: React.Dispatch<React.SetStateAction<boolean>>
    result: allPhotosT | null
    page?: number
    setpage: (data: number) => void
}
export interface getPhotoI {
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setphoto: (data: photoT | null) => void
    photoid: string | undefined
    seterror: React.Dispatch<React.SetStateAction<boolean>>
}
export interface signinI {
    username: string
    password: string
    route: string
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    setloading: (data: boolean) => void
}
export interface addCommentI {
    username: string | undefined
    comments: string
    photoid: string | undefined
    usersid: string | undefined
    route: string
    // setresult: (data: any) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    setloading: (data: boolean) => void
}
export interface commentI {
    comments?: string,
    commentid?: string | undefined,
    photoid?: string
    route: string
    setresult?: (data: any) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    setloading: (data: boolean) => void
}
export interface deleteCommentI {
    commentid: string | undefined
    deleteComment: (commentid: string | undefined) => object
}
export interface commentDialogueI {
    addcomment: boolean
    children: React.ReactNode
    comments: string
    setcomments: (data: string) => void
    AddComment?: () => void
    handleUpdateComment?: (data1: any) => void
    index?: any,
    commentid?: string | undefined
}
export type allCommentsT = [{
    id: string
    username: string
    comments: string
    usersid: string | undefined
    time: string
}]
export interface buttonI {
    name: string
    handleButton: () => void
}