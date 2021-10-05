import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courseshome.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="container m-5 p-5">
            <h2 className="mb-3">Our Top Rated Courses</h2>
            {/* <h2>Courses: {courses.length}</h2> */}
            <div className="row g-4 mt-2">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }
            </div>
        </div>
    );
};

export default Home;