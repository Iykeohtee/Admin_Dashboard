import Link from "next/link"

const NotFound = () => {
  return (
    <div className='self-center'>
        <h2 className="text-xl">Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p> 
        Return <Link href='/' className="text-sky-500">Home</Link> 
    </div>
  )
}

export default NotFound  