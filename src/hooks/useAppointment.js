import React, { useState } from "react";

const useAppointment = () => {
  const [appointment, setAppointmnet] = useState([]);

  const addAppointment = (service) => {
    const isaddThere = appointment?.find((appoint) => appoint.id === service.id);
    if (isaddThere) {
      alert("appointment already added");
    } else {
      const newappointment = [...appointment, service];
      setAppointmnet(newappointment);
    }
  };
  const cancel = (id)=>{
      const remain = appointment.filter(appoint=>appoint.id!==id)
      setAppointmnet(remain)
  }
  return { addAppointment, appointment,cancel };
};

export default useAppointment;
