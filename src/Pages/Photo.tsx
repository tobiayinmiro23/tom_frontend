import React, { useState, useRef, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { photoT, allCommentsT } from '../Types'
import { CommentModal, DeleteCommentModal, Loader, Header } from '../AllFiles'
import { SquarePen, MessageSquareText } from 'lucide-react';
import { appContext } from '../Context'
import { AddComment, GetPhoto, UpdateComment, DeleteComment, GetComment } from '../Fetch'
import { toast } from 'sonner';



const Photo = () => {
    const photoid = useParams().id
    const appData = useContext(appContext)
    const username = appData?.username
    const usersid = appData?.userid
    const [comments, setcomments] = useState<string>('')
    const [addcomment, setaddcomment] = useState(false)
    const [photo, setphoto] = useState<photoT | null>(null)
    const [result, setresult] = useState<allCommentsT | []>([])
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState<boolean>(false)

    let route = 'comments'
    const editCommentRef = useRef(new Array())
    editCommentRef.current = result?.map((_, i) => editCommentRef.current[i] ?? React.createRef())
    const GetComments = async () => {
        let route = `comments/${photoid}`
        let response = GetComment({ setloading, route, setresult, seterror })
        let data = await response
        setresult(data)
    }
    useEffect(() => {
        //function to get the details of an individual photo
        GetPhoto({ setloading, photoid, seterror, setphoto })
        // function to get the comments attached to an image
        if (photo?.id !== '') GetComments()
    }, [])

    // function to display modal
    const displayUpdateCommentModal = (index: any) => {
        setaddcomment(false)
        setcomments(editCommentRef.current[index].current.innerText)
    }

    // function to display modal
    const displayAddCommentModal = () => {
        setaddcomment(true)
        setcomments('')
    }
    //function to update comment
    const handleUpdateComment = async (commentid: string) => {
        let response = UpdateComment({ comments, commentid, photoid, setloading, route, seterror })
        let data = await response
        if (data?.status === 'success') {
            toast.success('comment successfully added')
            setresult(data.message)
        }
        if (data?.status === 'error') toast.error(data.message)
        if (error) toast.error('unable to delete comment an error occured')
    }

    //function to update comment
    const handleAddComment = async () => {
        let response = AddComment({ username, comments, photoid, usersid, setloading, route, seterror })
        let data = await response
        if (data?.status === 'success') {
            toast.success('comment successfully added')
            setresult(data.message)
        }
        if (data?.status === 'error') toast.error(data.message)
        if (error) toast.error('unable to delete comment an error occured')
    }


    //function to delete comment
    const deleteComment = async (commentid: string | undefined) => {
        let response = DeleteComment({ commentid, setloading, route, setresult, seterror })
        let data = await response
        if (data?.status === 'success') {
            toast.success('comment successfully deleted')
            let route = `comments/${photoid}`
            GetComment({ setloading, route, setresult, seterror })
        }
        if (data?.status === 'error') toast.error(data.message)
        if (error) toast.error('unable to delete comment an error occured')
    }

    return (
        <div className='pb-[5rem]'>
            <Header />
            <div className='pt-[2rem]'>
                {loading && <div ><div className='loader'><Loader /></div></div>}
                <div key={photo?.id} className='w-[85%] m-[auto]'>
                    <div className='h-[fit-content]'><img src={photo?.urls.full} alt="" /></div>
                    <div className='flex items-start justify-between my-[1rem]'>
                        <h2 className='text-[1.1rem] font-bold '>{photo?.user.username}</h2>
                        {photo?.id && <div onClick={displayAddCommentModal}><CommentModal comments={comments} setcomments={setcomments} AddComment={handleAddComment} children={<MessageSquareText className='cursor-pointer' size={22} strokeWidth={1.2} />} addcomment={addcomment} /></div>}
                    </div>
                    <p>{photo?.alt_description !== null ? photo?.alt_description : photo?.description}</p>
                    {
                        photo?.tags[0]?.title &&
                        <div>
                             <h2 className='text-[1.1rem] my-[0.6rem] font-bold '>tags</h2>

                            <div className='flex flex-wrap'>{photo?.tags.map((item) => <i key={item.title} className=' mb-[0.5rem] mr-[2rem]'>{item.title}</i>)}</div>
                        </div>
                    }
                    <div>
                        {
                            photo?.id &&
                            <div >
                                {
                                    result?.map((item, index) => {
                                        return <div>
                                            <h2 className='text-[1.1rem] font-bold '>Comments</h2>
                                            <div key={item.id} className='mt-[0.7rem]'>
                                                <div className='flex justify-between'>
                                                    <h3 className='font-bold'>{item.username}</h3>
                                                    {item.usersid === appData?.userid &&
                                                        <div className='flex justify-end'>
                                                            <DeleteCommentModal commentid={item.id} deleteComment={deleteComment} />
                                                            <div onClick={() => displayUpdateCommentModal(index)} ><CommentModal comments={comments} commentid={item.id} setcomments={setcomments} index={index} handleUpdateComment={handleUpdateComment} children={<SquarePen className='ml-[1.2rem]' size={22} strokeWidth={1.2} />} addcomment={addcomment} /></div>
                                                        </div>
                                                    }
                                                </div>
                                                <p ref={editCommentRef.current[index]} >{item.comments}</p>
                                                <p className=' text-[0.8rem] mt-[0.4rem] text-[#4e4b4b]'>{item.time}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo
