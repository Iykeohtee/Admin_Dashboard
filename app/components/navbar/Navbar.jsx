import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center bg-white drop-shadow-xl gap-60 h-auto py-2 sticky top-0">   
     
       <div className="flex pl-5 gap-40">
        <Link href="/">
        <Image 
         src="/logo.svg"
         alt="Logo Image"
         height={150} 
         width={150} 
        /> 
        </Link>
       </div>

       <div className="flex gap-10">  

       <Image 
         src="/nav.png"
         alt="Nav Icon"
         height={40}
         width={20}   
         className="mr-1 mt-1 text-sm max-h-5 cursor-pointer"  
        />  
         
         <div className="flex h-8 border-2 rounded-lg  px-3 pr-3 w-80 align-middle">
         <Image 
         src="/search.png"
         alt="Search Icon"
         height={10}
         width={20}   
         className="mr-1 mt-1 opacity-25 text-sm max-h-5"  
        />
        <input type="text" placeholder="Search Now" 
         className="outline-none ml-2 text-sm"
        />
         </div>
       
       </div>

       <div className="ml-40 flex gap-3 items-center">

       <Image 
         src="/notification.png"
         alt="Notification Icon"
         height={40}
         width={20}   
         className="mr-1 mt-1 text-sm max-h-5 cursor-pointer"  
        />  

       <Image 
         src="/admin.jpg"
         alt="Admin"
         width={30}
         height={50}
         className="mr-1 mt-1 text-sm max-h-8 rounded-xl cursor-pointer"    
        />  

        
       <Image 
         src="/three.png"
         alt="Three dots"
         height={40}
         width={20}   
         className="ml-1 mt-1 text-sm max-h-7 cursor-pointer"  
        />  
       </div>

    </div>
  )
}

export default Navbar