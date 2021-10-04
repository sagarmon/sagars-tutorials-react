import React from 'react';

const Course = (props) => {
    // console.log(props);

    const { subject, level, price, img } = props.course;
    return (
        <div className="card h-75 g-2 col-3 align-items-center border border-secondary rounded">
            <img src={img} className="card-img-top w-75 m-5" alt="..." />
            <div className="card-body">
                <h5 className="card-text">Subject: {subject}</h5>
                <h5 className="card-text">Level: {level}</h5>
                <h5 className="card-text">Price: {price}</h5>
                <button className="btn btn-primary">Enrol Now</button>
            </div>
        </div>
    );
};

export default Course;