import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <div>
      <form className='form-login  display-[block]  p-24'>
<div className="form-body w-[400px] rounded-3xl mx-auto text-white h-[373px] bg-[#161D2F]">

<h1 className='mb-20 text-3xl pt-5 flex justify-center  items-center text-white'>Login</h1>
        <input type="text" placeholder='Email address'  className=' ml-16  justify-center items-center px-3 block bg-inherit w-[279px] h-[37px] border-b-2'  />
        <input type="text" placeholder='Password' className=' m-[0, auto] ml-16  bg-inherit px-3 w-[279px] h-[37px] mt-4 border-b-2' />
        <Link to="./blogs" className="btn w-[280px] h-[48px] bg-[#FC4747] mt-6 border-none text-white mx-auto flex justify-center ">Wide</Link>

</div>

       
      </form>
    </div>
  )
}

export default home