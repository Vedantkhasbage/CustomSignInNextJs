"use client"
import {signIn} from 'next-auth/react'
export default function SignIn(){

    const handlesubmit=async(e:any)=>{
       e.preventDefault();
       const username=e.target.username.value;
       const password=e.target.password.value;

       const result=await signIn('credentials',{
        redirect:true,
        username,
        password,
        callbackUrl:"/"
       })

    }


    return <div className="h-screen w-full flex text-black">
           
    <img className="h-screen w-1/2" src="https://i.pinimg.com/originals/72/31/7f/72317fee23aff15f3c4cc72762dd86e4.jpg" alt="" />
      
      <div className="w-1/2 flex flex-col bg-white items-center justify-center ">
            <div className="w-[420px] shadow-sm shadow-black h-[500px]">
               <div className="w-full text-center">
               <h1 className="text-semibold text-4xl text-black">Sign In</h1>
               </div>
              

             <form onSubmit={handlesubmit}>
             <div className="mt-16">
               <div>
               <input name='username' className="w-full h-12 rounded border-2 .placeholder-black::placeholder outline-none" type="text" placeholder="Enter Username" />
               </div>

               <div className="mt-4">
                <input name='password' className="w-full h-12 rounded border-2 outline-none" type="text" placeholder="Enter Password" />
               </div>

                <button className="w-full h-12 bg-blue-500 mt-8 text-white">Sign In</button>
              </div>
             </form>

             <div className='w-[420px] flex items-center justify-center mt-8'>
                <div className='cursor-pointer mr-4' onClick={()=>
                    signIn("google",{callbackUrl:"/"})}>
                <img className='h-16 'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pDuv7lroGk1BeyR8zTerwS9filN9Vxby2dxUnh8-trS0rt518vQPgkzg6b6SQOpXDHg&usqp=CAU" alt="" />
                </div>

                <div className='cursor-pointer' onClick={()=>
                    signIn("gitlab",{callbackUrl:"/"})}>
                <img className='h-12' src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
                </div>
               
             </div>

                
            </div>

      </div>

    </div>
}