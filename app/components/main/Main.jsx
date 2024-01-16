import styles from './main.module.css'
import BarChart from '../barchart/BarChart' 

const Main = () => {
  return (
    <div className={`mt-14 ${styles.container}`}> 
      
      <div className="bg-white p-3 rounded-lg">
         <h1 className='font-bold text-2xl mb-4'>Order Details</h1>
         <p>The total number of sessions within the date range. It is the period time a user is 
            actively engaged with your website, page or app, etc</p>
            <BarChart/>
      </div>

      <div className="bg-white p-3 rounded-lg"> 
        <h1 className='font-bold text-2xl mb-4'>Sales Report</h1>
        <p>The total number of sessions within the date range. It is the period time a user is actively 
            engaged with your website, page or app, etc</p>
            <BarChart/>
      </div>

    </div>
  )
}

export default Main