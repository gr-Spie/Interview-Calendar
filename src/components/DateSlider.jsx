import React from "react";

const DateSlider = ({currentDate, currentYear, monthName, currentDay, chosenDate, onDayChoose, onWeekChange, weekDays}) => {
    const daysDates = Array.from({length: 8}, (_, i) => currentDate + i);

    return (
        <div>
            <div>
            <ul className="days-dates">
                {daysDates.map((date, i) => (
                    <li key={i}>{date}</li>
                ))}
            </ul>
            <ul className="weekdays">
                {weekDays.map((day, i) => (
                    <li key={i}>{day}</li>
                ))}
            </ul>
            </div>
            <div>
                <button onClick={()=> {onWeekChange('decrement')}}>{'<<'}</button>
                <span>{monthName.charAt(0).toUpperCase() + monthName.slice(1)} {currentYear}</span>
                <button onClick={()=> onWeekChange('increment')}>{'>>'}</button>
            </div>
        </div>
    )
}

export default DateSlider;