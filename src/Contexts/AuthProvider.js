import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';
import useAppointment from '../hooks/useAppointment'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
   const  allContext = useFirebase()
   const {services,news} = useServices();
  const {addAppointment, appointment,cancel} =  useAppointment()
   const data = {allContext,services,news,addAppointment, appointment,cancel}
    return (
        <AuthContext.Provider value= {data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;