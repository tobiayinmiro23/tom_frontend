import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardI } from '../Types'
import { LoadMorePhotos } from '../Fetch'

const Card = ({ result, page, setpage }: cardI) => {
    const [loadMore, setloadMore] = useState<boolean>(false)
    const getMorePhotos = () => {
        setpage(++page)
        LoadMorePhotos({ setloadMore, result, page, setpage })
    }


    return (

        <div>
            <div className='flex item-center justify-center m-[auto] max-w-[1600px] flex-wrap '>
                {result?.map((item) => {
                    return <div key={item.id} className='cursor-pointer my-[2rem] mx-[1%] w-[24rem] max-[846px]:w-[45%]'>
                        <Link to={`/photo/${item.id}`}>
                            <div className='w-[100%] '><img className='' src={item.urls.small} alt="" /></div>
                            <div className='bg-[white] pl-[0.5rem] pb-[1rem] pt-[0.5rem] '>
                                <div >
                                    <h3 className=' w-[98%] leading-[1.1rem] h-[1.2rem] overflow-hidden text-[1.1rem] font-bold mb-[0.5rem]'>{item.user.username}</h3>
                                    <p className=' w-[98%] leading-[1.1rem] h-[1.2rem] overflow-hidden '>{item.alt_description !== null ? item.alt_description : item.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
            <div className='mb-[2rem] text-center'>
                {  // to determine wether to show the loading spinner animation or the load more button
                    loadMore ?
                        <div className="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[black] border-t-[black] border-b-[#ffffff] "></div>
                        :
                        <button type="submit" onClick={getMorePhotos} className="px-3 cursor-pointer py-2 rounded-md  text-[white]  bg-[black]  outline-none hover:bg-[#201e1e]" >load more photos </button>
                }
            </div>
        </div>
    )
}

export default Card