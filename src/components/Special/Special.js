import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [ornament,house]=useContext(RingContext)
    return (
        <div>
            <h4>Special</h4>
            <p>{ornament}</p>
        </div>
    );
};

export default Special;