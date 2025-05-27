import React from 'react'

// import LoginPage from './form'
// import PasswordInput from '@/app/components/ui/PasswordInput'
// import MyPage from './context/context'

const About = () => {
  return (
    <div className="bg-zinc-50 justify-center items-center text-center mx-auto">
      <div>
        <h1>About</h1>
      </div>
      <div>
        <h2>Application page for user!</h2>
      </div>
      <div className="">
        
        <form 
          className="flex flex-col bg-slate-100 w-64 m-1 rounded-md justify-center items-center mx-auto"
        >
          <h1>SignUp form</h1>
          <input 
            className="bg-zinc-50 p-1 m-1 rounded-md"
            type="text"
            name="firstName"
            placeholder="Enter your first name..."
          />
          <input 
            className="bg-zinc-50 p-1 m-1 rounded-md"
            type="text"
            name="lastName"
            placeholder="Enter your last name..."
          />
          <input 
            className="bg-zinc-50 p-1 m-1 rounded-md"
            type="email"
            name="email"
            placeholder="Enter your valid email..."
          />
          <input
            className="bg-zinc-50 p-1 m-1 rounded-md"
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <button
            className="bg-blue-500 w-64 rounded-es-md rounded-ee-md p-1 cursor-pointer"
          >SignUp</button>
        </form>
      </div>
     
    </div>
  )
}

export default About