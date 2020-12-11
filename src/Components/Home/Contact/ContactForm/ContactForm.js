import React from 'react';

const ContactForm = () => {
    return (
        <div className='w-75 ml-auto mr-auto'>
            <form>
                <div className="form-group  contact_form_field">
                    <input type="email" className="form-control text-secondary contact_form_field"  placeholder="Email Address*"/>
                </div>
                <div className="form-group contact_form_field">
                    <input type="text" className="form-control text-secondary contact_form_field" placeholder="Subject*"/>
                </div>
                <div className="form-group mb-5">
                    <textarea className="form-control text-secondary pl-4" rows="6" placeholder='Your Message*'/>
                </div>
                <button type="submit" className="btn d-block pt-2 pb-2 pl-5 pr-5  ml-auto mr-auto rounded-0 btn-brand">SUBMIT</button>
            </form>
        </div>
    );
};

export default ContactForm;