import Image from 'next/image'
import { Input } from 'postcss'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'

export default function Home() {
  return (
   <div className='flex flex-col max-h-full px-5'>

<div className='w-full flex justify-between gap-72 mt-5 tracking-wide'>
        <div>
          <h1 className='text-2xl font-semibold'>Welcome <span className='text-purple-700'>Admin</span></h1>
          <p>All systems are running smoothly! You have <span className='text-gray-500 cursor-pointer'>
            3 unread alerts!</span></p>
        </div>

        <div>
        <input type="text" placeholder="Today (16th Jan 2024)" 
         className="outline-none ml-2 text-sm rounded-lg p-3 bg-slate-300"
        />
        </div>
    </div>

    <Hero/> 
    <Main/>
   </div>
  )
}
