import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h1 className="contact-us">Contact Us</h1>
            <br />
            <hr />
            <br />
            <br />
            <br />
            <h2>Need help?</h2>
            <p>If you’re a learner on the Sagar's Tutorials and have questions or need technical assistance, please visit our <br /> Learner Help Center for platform tutorials, FAQs or to chat with a member of our Customer Support team.</p><br /><br />

            <h2>Partnership Inquiries</h2>
            <p>If you’re someone who is interested in creating content on the Sagar's Tutorials, please email us.</p><br /><br />

            <h2>Privacy Inquiries</h2>
            <p className="mb-5">If you have questions about our Privacy Notice or an enquiry about how we <br /> protect your personal information, you can contact us at privacy@sagarstutorials.com.</p><br />

            <h2 id="direct-contact">Direct Contact</h2><br />
            <p>Phone: +8801712345678</p>
            <p>Email: info@sagarstutorials.org</p> <br />
        </div>
    );
};

export default Contact;