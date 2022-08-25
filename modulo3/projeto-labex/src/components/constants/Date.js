export function DateTrip (){
    let newDate = new Date()
    return `${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? "0" + (newDate.getMonth()+1) : newDate.getMonth() + 1}-${newDate.getDate()}`
}