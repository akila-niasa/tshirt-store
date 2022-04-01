import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext=createContext('diamnd')

const GrandPa = () => {
    const [house,sethouse]=useState(1)
    const ornament='gold'
    const addToHouse=()=>{
        const newHouse=house+1
        sethouse(newHouse)
    }
    return (
     <RingContext.Provider value={[ornament,house]}>
           <div>
           <h4>Grandpa</h4>
           <p>{house}</p>
           <button onClick={addToHouse}>buy</button>
            <div className='d-flex justify-constent-arround border border-dark p-3 m-3'>
            
            <Father house={house} ornament={ornament}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
        </div>
       </div>
     </RingContext.Provider>
    );
};

export default GrandPa;