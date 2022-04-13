import { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from 'axios'
import { toast } from "react-toastify";
import Link from "next/link";
import {useRouter} from "next/router"
import { Modal } from 'antd';

import Authform from "../components/forms/Authform";


const Login = () => {
    const [state,setState]=useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);

    const router=useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        //  console.log(email,passwsord)
        try {
            setLoading(true);
            const { data } = await axios.post(`http://localhost:8000/api/login`, {
                email,
                password,
            })
            // console.log(data);
            setLoading(false)
            setState({
                user:data.user,
                token:data.token,
            });
            window.localStorage.setItem("auth",JSON.stringify(data));
            router.push('/')

        } catch (err) {
            setLoading(false)
            toast(err.response.data)
        }
    }
    // console.log(state);
    return (
        <>
            <div className="flex justify-center items-center h-48 bg-parrot-img">
                <div className="">
                    <h1 className="font-bold text-black text-4xl ">Login Page</h1>
                </div>
            </div>
            <div className="flex h-screen justify-center bg-cyan-300 py-4 ">
                <div className="flex flex-col w-2/3 ">

                    <Authform
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        setLoading={setLoading}
                        page="login"
                    />
                    <div className="flex justify-center">

                        <Link href="/register">
                            <p>Don't have account? <a className="text-blue-800" >Register</a> </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;