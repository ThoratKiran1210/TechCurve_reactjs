import React, {useState} from 'react'
import CalendraComponent from './CalendraComponent'



const colorOptions = [
  {value: 'yellow', label: 'yellow'},
  {value: 'green', label: 'green'},
]
;
const App =  () =>{

  const[selectedDate, setSelectedDate] = useState(null)
  const[selectedColor, setSelectedColor] = useState(null)

  const handleDateChange = (date) =>{
    setSelectedDate(date);
  }
  const handleColorChange = (color) =>{
    setSelectedColor(color.value);
  }


  return(
    <div>
      <CalendraComponent 
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
        colorOptions={colorOptions}
      />
    </div>
  )
}
export default App;