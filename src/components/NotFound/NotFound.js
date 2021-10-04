import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src="https://imagizer.imageshack.com/img923/5409/6Wf5He.jpg" alt="" />
            <br />
            <Link to="/home"><button type="button" className="btn btn-danger notfound">Go Home</button></Link>
        </div>
    );
};

export default NotFound;