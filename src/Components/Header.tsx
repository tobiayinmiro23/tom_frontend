
import image from '../assets/picture.png'
const Header = () => {
    return (
        <div className='border flex items-center justify-center border-b-[#bebaba] text-center py-[0.8em]'>
            <div className='w-[2.6rem] h-[2.6rem] mr-[0.3rem] max-[500px]:w-[2rem] max-[500px]:h-[2rem] max-[371px]:w-[1.7rem] max-[371px]:h-[1.7rem]'><img src={image} alt="" /></div>
            <h1 className="text-[2rem] font-bold max-[500px]:text-[1.7rem] max-[371px]:text-[1.4rem]">The Inceractive Gallery</h1>
        </div>
    )
}

export default Header