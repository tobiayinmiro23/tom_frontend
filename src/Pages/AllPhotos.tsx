import { useEffect, useState } from 'react'
import { allPhotosT } from '../Types'
import { Card, Header, Loader } from '../AllFiles'
import { GetAllPhotos } from '../Fetch'

const AllPhotos = () => {
    const [result, setresult] = useState<allPhotosT | null>(null)
    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [loading, setloading] = useState<boolean>(true)
    const [page, setpage] = useState<number>(1)

    useEffect(() => {

        GetAllPhotos({ setloading, setdataReady, setresult, seterror, page })
    }, [])
    return (
        <div>
            <Header />
            {loading && <div className='loader'><Loader /></div>}
            {dataReady && <Card result={result} page={page} setpage={setpage} />}
            {error && <h1 className='text-center font-bold text-[1.9rem] mt-[4rem]'>An error occured</h1>}
        </div>
    )
}

export default AllPhotos
