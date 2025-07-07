import { useState, useEffect, useContext } from 'react'
import { appContext } from '../Context'
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import { Signin } from '../Fetch'
import { Loader } from '../AllFiles';
import { toast } from "sonner"



const LoginPage = () => {
    const appData = useContext(appContext)
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [signup, setsignup] = useState(true)
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const [error, seterror] = useState(false)


    useEffect(() => {

        if (window.location.pathname.split('/')[1] === 'signup') setsignup(true)
    }, [])
    const displayLogin = () => {
        setsignup(false)
        navigate('/login')
    }
    const handleSignIn = async () => {
        let route = 'user/signin'
        let response = Signin({ username, password, route, setloading, seterror })
        let data = await response
        if (data?.status === 'success') {
            toast.success('account created successfully please login')
            displayLogin()
        }
        if (data?.status === 'error') toast.error(data.message)
        if (error) toast.error('unable to create account an error occured')
    }

    const handleLogIn = async () => {
        let route = 'user/login'
        let response = Signin({ username, password, route, setloading, seterror })
        let data = await response
        if (data?.status === 'error') toast.error(data.message)
        if (error) toast.error('unable to create account an error occured')
        if (data?.status === 'success') {
            appData?.setuserid(data.message.id)
            appData?.setusername(data.message.username)
            navigate('/photos')
        }

    }
    const handleButton = (e: any) => {
        e.preventDefault()
        if (username.trim() === '' || password.trim() === '') toast.error('fill in all required input fields')
        else {
            if (signup) handleSignIn()
            else handleLogIn()
        }
    }
    return (
        <div className="Signup">
            {loading && <div className='loaderWrapper'><div className='loader'><Loader /></div></div>}
            <div style={{ boxShadow: ' 0px 2px 5px rgba(0, 0, 0, 0.4)' }} className='w-[20rem] m-[auto] text-center pt-[0.5rem] bg-[white] rounded-[0.18rem]  max-[345px]:w-[90%]'>
                <h1 className='pt-[1rem] text-[1.9rem] font-bold'>{signup ? 'Sign Up' : 'Log in'}</h1>
                <form action="">
                    <div className="flex w-[90%] items-center m-[auto] mt-[3rem] border-b-[2px] border-[black]">
                        <User size={24} strokeWidth={1.2} />
                        <input placeholder="Email" onChange={(e) => setusername(e.target.value)} value={username} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="username" />
                    </div>
                    <div className="flex w-[90%] items-center m-[auto] mt-[3rem] border-b-[2px] border-[black]">
                        <Lock size={20.5} strokeWidth={1.2} />
                        <input placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="password" />
                    </div>
                    {signup && <p onClick={displayLogin} className='mt-[0.8rem] cursor-pointer'>already have an account? log in</p>}
                    <button onClick={(e) => handleButton(e)} disabled={loading} className="w-[85%] rounded-[0.2rem] text-[white] px-[3rem] py-[0.4rem] bg-[#3cabbf] font-bold cursor-pointer mt-[1.4rem] mb-[1.7rem] outline-none hover:bg-[#007991]">
                        <h3 >{signup ? 'Create account' : 'Log in'}</h3>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
