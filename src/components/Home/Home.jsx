//import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <h3>this is home</h3>
            <Outlet/>
        </div>
    );
};

export default Home;