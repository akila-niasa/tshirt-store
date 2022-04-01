import React from 'react';

const Aunty = ({house}) => {
    return (
        <div  className=' p-3 m-3 border border-dark'>
           <h4>Aunty</h4>
           <p>{house}</p>
        </div>
    );
};

export default Aunty;