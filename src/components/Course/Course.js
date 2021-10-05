import React from 'react';

const Course = (props) => {
    // console.log(props);

    const { subject, level, price, img } = props.course;
    return (
        <div className="col-3">
            <div className="card h-100 border border-2 rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-text">Subject: {subject}</h5>
                    <h5 className="card-text">Level: {level}</h5>
                    <h5 className="card-text">Price: {price}</h5>
                    <button className="btn btn-primary">Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;