import dayjs from "dayjs"
function generateDate (month = dayjs().month(),year = dayjs().year()){
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month")
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month")
    const arrayOfDate = []
    console.log(firstDateOfMonth)
    console.log(lastDateOfMonth.date(32))
    //prefix date
    for (let i =0; i< firstDateOfMonth.day();i++){
        arrayOfDate.push(firstDateOfMonth.day(i))
    }
    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
        arrayOfDate.push(firstDateOfMonth.date(i))
    }
    //generate suffix date
    const remaining = 42 - arrayOfDate.length
    for (let i = lastDateOfMonth.date()+1; i<= lastDateOfMonth.date() + remaining; i++){
        arrayOfDate.push(lastDateOfMonth.date(i))
    }
    return arrayOfDate
}

export default generateDate