"use client"
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

 
  return <div>
    <SessionProvider>
      <WrapHome/>
    </SessionProvider>
  </div>
}


const WrapHome=()=>{

  const session=useSession();
  console.log(session)
  return (
   <div>
   {session.status==="authenticated"? <button onClick={()=>signOut()}>LogOut</button> : <button onClick={()=>signIn()}>SignIn</button> }
   </div>
  );
}
