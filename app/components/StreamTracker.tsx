import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Day {
  date: Date;
  isQuestionDay: boolean;
  isPOTD: boolean;
}

const getDaysInMonth = (year: number, month: number): Day[] => {
  const days = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    days.push({
      date: new Date(date),
      isQuestionDay: Math.random() > 0.7,
      isPOTD: Math.random() > 0.9,
    });
    date.setDate(date.getDate() + 1);
  }

  return days;
};

const getMonths = () => {
  return Array.from({ length: 12 }, (v, k) =>
    new Date(0, k).toLocaleString("default", { month: "long" })
  );
};

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth())
  ); // Initialize to current month
  const [days, setDays] = useState<Day[]>([]);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const globalMaxStreak = 45;
  const months = getMonths();
  const currentYear = today.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear()
  );

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = getDaysInMonth(year, month);
    setDays(days);

    let streak = 0;
    let maxStreak = 0;
    days.forEach((day) => {
      if (day.isQuestionDay) {
        streak++;
        if (streak > maxStreak) {
          maxStreak = streak;
        }
      } else {
        streak = 0;
      }
    });

    setCurrentStreak(streak);
    setMaxStreak(maxStreak);
  }, [currentDate]);

  const handlePrevMonth = () => {
    const prevMonth = new Date(selectedYear, selectedMonth - 1);
    if (prevMonth <= today) {
      setSelectedMonth(prevMonth.getMonth());
      setSelectedYear(prevMonth.getFullYear());
      setCurrentDate(prevMonth);
    }
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(selectedYear, selectedMonth + 1);
    if (nextMonth <= today) {
      setSelectedMonth(nextMonth.getMonth());
      setSelectedYear(nextMonth.getFullYear());
      setCurrentDate(nextMonth);
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(event.target.value);
    setSelectedMonth(newMonth);
    setCurrentDate(new Date(selectedYear, newMonth));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value);
    setSelectedYear(newYear);
    setCurrentDate(new Date(newYear, selectedMonth));
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const isCurrentOrPastMonth = (date: Date): boolean => {
    return (
      date.getFullYear() < today.getFullYear() ||
      (date.getFullYear() === today.getFullYear() &&
        date.getMonth() <= today.getMonth())
    );
  };

  return (
    <div className="p-6  rounded-lg shadow-lg bg-white w-96 md:w-full   max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="p-2 pr-8 rounded-md border"
          >
            {months.map((month, index) => (
              <option className="gap-1" key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="p-2 pr-8  rounded-md border"
          >
            {Array.from(
              { length: currentYear - 1999 },
              (v, k) => currentYear - k
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              isCurrentOrPastMonth(currentDate) && day.isQuestionDay
                ? "bg-green-400"
                : "bg-gray-200"
            } ${
              isCurrentOrPastMonth(currentDate) &&
              day.isPOTD &&
              "border-2 border-yellow-400"
            }`}
          >
            {day.date.getDate()}
          </div>
        ))}
      </div>

      <div className="flex   items-center mt-6">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span>Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
            <span>POTD question</span>
          </div>
        </div>

      </div>
          <div className=" text-sm flex justify-between">
            <span>Current Streak: {currentStreak}</span>
            <span className="ml-4">Max Streak: {maxStreak}</span>
          </div>
          <div className="text-sm flex-start">
            <span >Global Max Streak: {globalMaxStreak}</span>
          </div>
    </div>
  );
};

export default Calendar;
