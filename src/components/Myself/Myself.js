import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ornament}) => {
    return (
        <div  className=' p-3 m-3 border border-dark'>
            <h4>MySelf</h4>
            <p>{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;