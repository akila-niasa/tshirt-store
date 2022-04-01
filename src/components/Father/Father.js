import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister';

const Father = ({house,ornament}) => {
    return (
        <div  className=' p-3 m-3 border border-dark'>
            <h4>father</h4>
            <p>{house}</p>
            <div>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;