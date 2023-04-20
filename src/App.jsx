import React, { useState } from "react";
import Header from "./components/Header";
import DateSlider from "./components/DateSlider";
import HourGrid from './components/HourGrid'


const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date()); // получаем сегоднешнее число
  const [currentDay, setCurrentDay] = useState(currentDate.getDay()); // возвращает номер дня недели
  const [chosenDate, setChosenDate] = useState(currentDate.getDate()); // выбранное число, сегодняшнее число по дефолту

  let monthName = currentDate.toLocaleString('default', { month: 'long' });
  let weekdaysOrdered = createDaysOrder(weekdays);

  function createDaysOrder (weekdays) {
      if (currentDay === 1) {
          return weekdays
      }

      const firstHalf = weekdays.slice(0, currentDay - 1);
      const secondHalf = weekdays.slice(currentDay - 1);

      return secondHalf.concat(firstHalf);
  }

  const handleAddEvent = (eventDate) => {
    console.log(eventDate)
  };

  const handleChooseDay = (day) => {
    setChosenDate(day)
  };


  const handleWeekChange = (action) => {
    let newDate;

    if (action === 'increment') {
      newDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

      console.log(newDate);
      console.log(currentDate);
    }

    if (action === 'decrement') {
      newDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

      console.log(newDate);
      console.log(currentDate);
    }

    setCurrentDay(newDate.getDay())
    setCurrentDate(newDate);
    weekdaysOrdered = createDaysOrder(weekdays);
    monthName = newDate.toLocaleString('default', { month: 'long' });
  }

  return (
    <div>
      <Header onAddEvent={handleAddEvent}/>
      <DateSlider 
      weekDays={weekdaysOrdered}
      currentDate={currentDate.getDate()} 
      // число
      currentYear={currentDate.getFullYear()}
      // год
      currentDay={currentDate.getDay()} 
      // номер дня недели
      monthName={monthName}

      chosenDate={chosenDate}
      // выбранный день

      onDayChoose={handleChooseDay}
      onWeekChange={handleWeekChange}
      />
      <HourGrid />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
