
import './App.css';
import cs from './cs';
import generateDate from './utilities/calendar';

function App() {
  console.log(generateDate())
  const days = ["S", "M", "T", "W","T","F","S"]
  return (
    <div className='w-96 h-96 '>
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
            <h1 className={
              cs(currentMonth?"": "text-gray-300",
              today? "bg-red-500": "",
              "h-10 w-10 grid place-content-center rounded-full",
        )}
              >
                {date.date()}
              </h1>
          </div>
        )
      })}
          </div>
    </div>
  )
}

export default App;
