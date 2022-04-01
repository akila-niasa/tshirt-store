import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const [ornament,house]=useContext(RingContext)
    return (
        <div  className=' p-3 m-3 border border-dark'>
            <h4>Sister</h4>
            <p>{house}</p>
            <p>{ornament}</p>
        </div>
    );
};

export default Sister;