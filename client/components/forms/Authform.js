import { LoadingOutlined } from '@ant-design/icons'
const Authform=(props)=>{
    const {handleSubmit,name,setName,email,setEmail,password,setPassword,secret,setSecret,loading,page}=props;
  return(
      <>
        <form onSubmit={handleSubmit}>
   {page!=="login"&& <div className="mb-6">
        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required />
    </div>}
    <div className="mb-6">
        <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
        type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
    </div>
    <div className="mb-6">
        <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        <input 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required />
    </div>
  {page!=="login"&&  <div className="mb-6">
        <label htmlFor="secret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secret</label>
        <input 
         value={secret}
         onChange={(e)=>setSecret(e.target.value)}
        type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="By Using this Reset password if forgotten" required />
    </div>}

    <button className=" w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{page==="login"?(loading?<LoadingOutlined/>:"Login"):(loading?<LoadingOutlined/>:"Register new account")}</button>
</form>
      </>
  )
}

export default Authform;