import Link from 'next/link'
import { useContext,useEffect,useState } from 'react'

import { UserContext } from '../context'
import { useRouter } from "next/router"
const Nav = () => {
    const [current,setCurrent]=useState("")
    const [state, setState] = useContext(UserContext);
    const router = useRouter();

useEffect(()=>{
    process.browser&&setCurrent(window.location.pathname);
    // console.log("current=>",current);
},[process.browser&&window.location.pathname]);

    const logout = () => {
        window.localStorage.removeItem('auth');
        setState(null);
        router.push('/login');
    }
    return (
        <div className=" bg-black text-white py-2">
            <div className=" bg-black text-white mx-4 flex justify-between ">
                <div>
                    <Link href='/'>
                        <a className={`${current==="/"&&"border-b-2 border-cyan-500"}`}>Home</a>
                    </Link>
                </div>
                {!state ? (<div >
                    <Link href='/login'>
                        <a className={`mx-2 ${current==="/login"&&"border-b-2 border-cyan-500"}`}>Login</a>
                    </Link>

                    <Link href='register'>
                        <a className={`mx-2 ${current==="/register"&&"border-b-2 border-cyan-500"}`}>Register</a>
                    </Link>

                </div>):(
                        
                        <div className='flex'>
                            <div>
                           { state&&state.user&&state.token&&<Link href='/user/dashboard'><a className={`mx-2 ${current==="/user/dashboard"&&"border-b-2 border-cyan-500"}`}>{state.user.name}</a></Link>}
                            </div>
                            <div><a onClick={logout} className="mx-2">Logout</a></div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}
export default Nav;