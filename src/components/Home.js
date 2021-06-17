import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>FPL League Tracker</h1>
            <Link to='/team'>Team</Link>
        </div>
    );
};

export default Home;
