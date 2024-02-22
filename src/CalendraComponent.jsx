import React, { useState } from "react";
import Calendar from "react-big-calendar";
import Select from 'react-select';

const CalendraComponent = ({ onDateChange, selectedDate, colorOptions, events }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);



const handleDateChange = (date) => {
    onDateChange(date);
    if (!startDate) {
        setStartDate(date);
    } else {
        setEndDate(date)
    }
};

const handleColorChange = (color) => {
    setSelectedColor(color.value)
};

const applyColorRange = (start, end, color) => {
    events.forEach(event => {
        if (event.date >= start && event.date <= end) {
            return { ...event, backgroundColor: color };
        }
        return event;
    });
    onDateChange(updatedEvents);
};

return (
    <div>
        <Calendar
            selected={selectedDate}
            onSelect={handleDateChange}
            events={events}
            style={{ height: 500, width: 700 }}
            eventPropGretter={(event) => ({
                style: {
                    backgroundColor: selectedColor && event.date.isSame(selectedDate, 'day') ? selectedColor : 'white',
                },
            })}
        />
        <Select
            value={selectedColor}
            onChange={handleColorChange}
            options={colorOptions}
            placeholder="Select Color"
        />
        <button onClick={() => setSelectedColor(null)}>Clear Color</button>
        <button onClick={() => {
            if (startDate && endDate) {
                applyColorRange(startDate, endDate, selectedColor);
            } else {
                console.log("Please select a date range first");
            }
        }}
        ></button>
    </div>
)




    }
export default CalendraComponent;