import Image from "next/image";
import Link from "next/link";

const Sidear = () => {

    const links = [
        {
            title: 'Dashboard',
            path: "1",
            icon: "/dashboard.png"
        },
        {
            title: 'Students',
            path: "2",
            icon: "/student.png"
        },
        {
            title: 'Teachers',
            path: "3",
            icon: "/teacher.png"
        },
        {
            title: 'Parents',
            path: "4",
            icon: "/parents.png"
        },
        {
            title: 'Events',
            path: "5",
            icon: "/event.png"
        },
        {
            title: 'Exam',
            path: "6",
            icon: "/exam.png"
        },
        {
            title: 'Assistant',
            path: "7",
            icon: "/assistant.png"
        }
    ];

  return (


    <div className="bg-white flex flex-col gap-9 w-2/12 h-screen">   
        {
            links.map((link, i) => (
                <Link key={i} href={link.path} className="font-semibold ml-10 text-sm text-gray-700 mr-10"> 
                    <div className={`flex gap-2 mt-5`}>  
                    <Image src={link.icon} height={15} width={20} alt="Info" className=""/> 
                    {link?.title}
                    </div> 
                </Link>    
            ))
        }
    </div>
  )
}

export default Sidear