import { UserProvider } from '../context'; 
import Head from 'next/head';
import Nav from '../components/Nav' //nav bar in all the files
import { ToastContainer } from 'react-toastify';// for send notification
import 'react-toastify/dist/ReactToastify.css'; 
import 'antd/dist/antd.css'; //for  UI design

export default function App({Component,pageProps}){
    return (
        <UserProvider>
        <Head>
        <title> MY App</title>
        <script src="https://cdn.tailwindcss.com"></script> {/*tailwind css cdn */}
         <link rel="stylesheet" href="./css/index.css"></link> {/*css file in public forlder */}
        
        </Head>
        <ToastContainer position="top-right" />
        <Nav/>
    <Component {...pageProps}/>
    </UserProvider>
    )
}