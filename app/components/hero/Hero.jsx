import Image from "next/image"
import styles from "./hero.module.css"

const Hero = () => {
   

       const items = [
        {
            title: "Today's Booking",
            Number: "4006",
            days: "10%(30 days)"
        },
        {
            title: 'Total Booking',
            Number: "61344",
            days: "22%(30 days)"
        },
        {
            title: 'Number of Meetings',
            Number: "34040",
            days: "2%(30 days)"
        },
        {
            title: 'Number of Students',
            Number: "47033",
            days: "0.22%(30 days)"
        }
    ];

  return (
    <div className="flex mt-14 w-full -z-50">

        <div className="relative w-2/4 h-72">
            <Image
             src="/people.svg"
             height={100}
             width={100}
             className="w-full h-full rounded-[3rem]"
            />
        </div>

        <div className={`relative ml-5 ${styles.container}`}>   
          {
            items.map((item) => (
                <div key={item.Number} className="bg-blue-500 m-2 rounded-lg p-4 w-60 h-28 text-white drop-shadow-lg"> 
                 <h1 className="text-xs mb-5">{item.title}</h1>
                <h2 className="text-2xl font-bold">{item.Number}</h2>
                <h3 className="text-xs">{item.days}</h3> 
                </div>
            ))
          }
        </div>

    </div>
  )
}

export default Hero