import { useCallback, useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom'
import { cardI } from '../Types'
import { LoadMorePhotos } from '../Fetch'

const Card = ({ result, page, setpage }: cardI) => {
    const [loadMore, setloadMore] = useState<boolean>(false)
    const [displayImageInfo, setdisplayImageInfo] = useState(false)
    const [displayLoadMore, setdisplayLoadMore] = useState(false)

    const timer = useCallback((setTimer: (b: boolean) => void) => {
        setTimeout(() => {
            setTimer(true)
        }, 760);
    }, [])

    if (result !== null) timer(setdisplayLoadMore)
    timer(setdisplayImageInfo)
    const getMorePhotos = () => {
        setpage(++page)
        LoadMorePhotos({ setloadMore, result, page, setpage })
        setdisplayImageInfo(false)
        timer(setdisplayImageInfo)
    }

    return (
        <div>
            <div className="columns-3 px-[0.4rem] mt-[3rem] gap-2 max-lg:columns-2 ">
                {result?.map((item) => (
                    <div
                        key={item.id}
                        className="mb-2 break-inside-avoid bg-card cursor-pointer"
                    >
                        <Link to={`/photo/${item.id}`}>
                            <img
                                src={item.urls.small}
                                alt="card image"
                                className="w-full"
                            />
                            {
                                displayImageInfo &&
                                <div className="bg-white p-2">
                                    <h3 className="font-bold text-sm truncate">
                                        <LinesEllipsis
                                            text={item?.user?.username}
                                            maxLine='1'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                        />
                                    </h3>
                                    <div className="text-sm line-clamp-2">
                                        {
                                            item?.alt_description ?
                                                <LinesEllipsis
                                                    text={item?.alt_description}
                                                    maxLine='1'
                                                    ellipsis='...'
                                                    trimRight
                                                    basedOn='letters'
                                                />
                                                :
                                                item?.description ?
                                                    <LinesEllipsis
                                                        text={item?.description}
                                                        maxLine='1'
                                                        ellipsis='...'
                                                        trimRight
                                                        basedOn='letters'
                                                    />
                                                    :
                                                    " "
                                        }
                                    </div>
                                </div>
                            }
                        </Link>
                    </div>
                ))}
            </div>

            {
                displayLoadMore &&
                <div className='my-[2rem] text-center'>
                    {  // to determine wether to show the loading spinner animation or the load more button
                        loadMore ?
                            <div className="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[black] border-t-[black] border-b-[#ffffff] "></div>
                            :
                            <button type="submit" onClick={getMorePhotos} className="px-3 cursor-pointer py-1.5 rounded-md  text-[white]  bg-[black]  outline-none hover:bg-[#201e1e]" >load more photos </button>
                    }
                </div>
            }
        </div>
    )
}

export default Card
