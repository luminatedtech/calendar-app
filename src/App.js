import React, {useState} from 'react';
import dayjs from 'dayjs';
import './App.css';
import cs from './cs';
import generateDate from './utilities/calendar';
import { months } from './utilities/calendar';

function App() {
  console.log(generateDate())
  const currentDate = dayjs()
  const [today,setToday] = useState(currentDate)
  const days = ["S", "M", "T", "W","T","F","S"]
  return (
  <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center'>
    <div className='w-96 h-96 '>
      <div>
          <h1>{months[today.month()]}</h1>
      </div>
      <div className='grid grid-cols-7'>
        {days.map((day,index)=> {
          return (
            <div className='h-14 grid place-content-center text-sm'>
               <h1 className='h-14 border-t'key={index}>{day}</h1>
            </div>
          )

         
        })}
      </div>
      <div className='grid grid-cols-7'>
      {generateDate().map(({date, currentMonth,today},index)=> {
        return (
          <div className='h-14 border-t grid place-content-center'>
            <h1 
            className={cs(
              currentMonth ? "" : "text-gray-300",
              today ? "bg-red-500 text-white" : "",
              "h-10 w-10 grid place-content-center rounded-full transition-all hover:bg-black hover:text-white",
        )}
              >
                {date.date()}
              </h1>
          </div>
        )
      })}
        </div>
    </div>
    <div className='h-96 w-96 px-10'>
      <h1> Meetings for today</h1>
      <p>No meetings</p>
    </div>
  </div>
  )
}

export default App;
