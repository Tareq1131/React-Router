//import React from 'react';

import { useLoaderData } from "react-router-dom";

const Frind = () => {

const data= useLoaderData();
console.log('data',data);

    return (
        <div>
            <h3>My friends</h3>
        </div>
    );
};

export default Frind;