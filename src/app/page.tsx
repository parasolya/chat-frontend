import SignIn from "@/sections/Signin";

import SignUp from "@/sections/SignUp";

export default function Home() {
  return (
    <div className="relative h-screen">

  
    <div className="relative bg-[url('/1-doors-picasso.jpg')] bg-cover h-screen p-8 py-auto gap-16">
   
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      <div className="relative z-10 ">
      <h1 className="text-4xl font-semibold text-yellow-400">Let's chat!</h1>
  
      <div className="w-full flex items-center justify-between">
        <SignIn />
        <SignUp />
      </div>
      </div>
    </div>
  </div>
  );
}
