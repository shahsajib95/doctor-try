import React from 'react';
import { useContext } from 'react';
import { CalenderContext } from '../../App';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'

const Calender = () => {
    const calenderData = useContext(CalenderContext)
    const onChange = date => calenderData.setState(date)
    return (
        <div className="my-calender">
            <Calendar
            onChange={onChange}
            value={calenderData.value}
            />
        </div>
    );
};

export default Calender;