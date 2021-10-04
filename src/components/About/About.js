import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container mt-3 mb-5 about">
                <h1 className="about-us">About Us</h1>
                <h2 className="m-5">We envision a world where anyone, anywhere has the power to transform their life through learning.</h2>

                <h2 className="mb-5">Sagar's Tutorials partners with more than <br />100 leading institutions to bring flexible, affordable online <br />learning to individuals worldwide. We offer a range of<br />learning opportunities—from hands-on projects <br />and courses to job-ready certificates and degree programs.</h2>
            </div>

            <div className="we-believe pb-5">
                <h2 className="mt-5">We believe</h2>
                <h4>Learning is the source of human progress.</h4><br />
                <h4>It has the power to transform our world <br />
                    from illness to health, <br />
                    from poverty to prosperity, <br />
                    from conflict to peace.</h4><br />
                <h4>It has the power to transform our lives <br />
                    for ourselves,<br />
                    for our families,<br />
                    for our communities.</h4><br />
                <h4>No matter who we are or where we are,<br />
                    learning empowers us to change and grow<br />
                    and redefine what’s possible.<br />
                    That’s why access to the best learning is a right, not a privilege.</h4><br />
                <h4>So that anyone, anywhere has the power to<br />
                    transform their life through learning.</h4>
            </div>
        </div>
    );
};

export default About;