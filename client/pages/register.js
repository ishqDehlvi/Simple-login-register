import { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import Link from "next/link";
import { Modal } from 'antd';

import Authform from "../components/forms/Authform";


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secret, setSecret] = useState("")
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name,email,password,secret)
        try {
            setLoading(true);
            const { data } = await axios.post(`http://localhost:8000/api/register`, {
                name,
                email,
                password,
                secret,
            })
            setOk(data.ok)
            setLoading(false);
        } catch (err) {
            setLoading(false);
            toast(err.response.data)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-48 bg-parrot-img">
                <div className="">
                    <h1 className="font-bold text-black text-4xl ">Register Page</h1>
                </div>
            </div>
            <div className="flex h-screen justify-center bg-cyan-300 py-4 ">
                <div className="flex flex-col w-2/3 ">

                    <Authform
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}

                    />

                    <div className="flex justify-center">
                    <Link href="/login">
                        <p>Already have account?<a className="text-blue-800">Login</a> </p>
                    </Link>

                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center ">
                <Modal
                    title="Congratulations!"
                    visible={ok}
                    onCancel={() => setOk(false)}
                    footer={null}
                >
                    <h3>Successfully register</h3>
                    <Link href='/login'>
                        <a className="px-2 py-1 text-white bg-black">login</a>
                    </Link>
                </Modal>
            </div>
        </>
    )
}
export default Register;