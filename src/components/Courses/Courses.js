import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./coursesall.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="container m-5 p-5">
            {/* <h2>Courses: {courses.length}</h2> */}
            <div className="row">
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

export default Courses;