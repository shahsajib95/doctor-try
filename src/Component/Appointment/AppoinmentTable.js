import React, { useContext } from 'react';
import Modal from 'react-modal';
import { DataContext } from '../../App';

Modal.setAppElement('#root')

const AppoinmentTable = () => {
    const contextData = useContext(DataContext);
    const contextData_2 = useContext(DataContext);
    
    return (
        <div>
            
        </div>
    );
};

export default AppoinmentTable;