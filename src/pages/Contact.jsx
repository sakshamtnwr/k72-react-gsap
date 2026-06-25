import React from 'react';
import ContactTop from '../components/contact/contactTop'
import ContactSlide from '../components/contact/contactSlide'
import ContactBottom from '../components/contact/contactBottom'
const Contact = () => {
    return (
        <div className='overflow-x-hidden'>
            <ContactTop/>
            <ContactSlide/>
            <ContactBottom/>
        </div>
    );
};

export default Contact;