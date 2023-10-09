//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/friend";


const Frind = () => {

const friends= useLoaderData();
//console.log('data',friends);

    return (
        <div>
            <h3>My friends:{friends.length}</h3>
            <div>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Frind;