import "./styles.css";
import {useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { days } from "../../utils";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TimeTable({ setDataObject }) {
  const [inputType, setInputType] = useState(-1);
  

  const handleTimeTypeonFocus = (index) => {
    setInputType(index);
  };

  const handleTimeTypeonBlur = () => {
    setInputType(-1);
  };



  const handleChange = (event, index) => {
    const { name, checked } = event.target;
    
    setDataObject(prevState => {
      const updatedSchedules = [...prevState.schedules];
      if (checked) {
        updatedSchedules.push({ day: days[index], start_time: "", end_time: "" });
      } else {
        const updatedIndex = updatedSchedules.findIndex(schedule => schedule.day === days[index]);
        if (updatedIndex !== -1) {
          updatedSchedules.splice(updatedIndex, 1);
        }
      }
      return { ...prevState, schedules: updatedSchedules };
    });
  };

  const handleTime = (e) => {
    const { name, value } = e.target;
   

    setDataObject(prevState => {
      const updatedSchedules = [...prevState.schedules];
      const index = updatedSchedules.findIndex(schedule => schedule.day === days[inputType]);
      if (index !== -1) {
        updatedSchedules[index][name] = value;
      }
      return { ...prevState, schedules: updatedSchedules };
    });
  };

  return (
    <table className="branch-table">
      <tbody>
        {days.map((day, index) => (
          <tr key={index}>
            <td className="day">
              <label
                htmlFor={`id${index}`}
                className="dayLabel"
              >
                {day}
              </label>
            </td>
            <td className="checkbox-td">
              <Checkbox
                {...label}
                color="default"
                id={`id${index}`}
                value={days[index]}
                onChange={(e) => handleChange(e, index)}
                name="day"
              />
            </td>
            <td className="start-time-td">
              <input
                className="time"
                name="start_time"
                onFocus={() => handleTimeTypeonFocus(index)}
                onBlur={handleTimeTypeonBlur}
                type={inputType === index ? 'time' : 'text'}
                onChange={handleTime}
              />&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <input
                className="time"
                name="end_time"
                onFocus={() => handleTimeTypeonFocus(index)}
                onBlur={handleTimeTypeonBlur}
                type={inputType === index ? 'time' : 'text'}
                onChange={handleTime}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimeTable;

