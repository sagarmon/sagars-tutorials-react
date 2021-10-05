import React from 'react';

const Course = (props) => {
    // console.log(props);

    const { subject, level, price, img } = props.course;
    return (
        <div class="col-3">
            <div class="card h-100 border border-2 rounded">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
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