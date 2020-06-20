import React from 'react';
import { useEffect } from 'react';
import Header from '../Component/Header/Header';
import AppointmentSection from '../Component/Appointment/AppoinmentSection';


const Appointment = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <>
            <Header/>
            <AppointmentSection/>
        </>
    );
};

export default Appointment;