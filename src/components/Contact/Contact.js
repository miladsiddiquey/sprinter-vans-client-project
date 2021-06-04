import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs .sendForm('gmail', 'template_6ijkc2w', e.target, 'user_TNQIjGJKb07VNHYu2GCET')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('message send successful')
    }

    return (
        <div className="contactUs p-5" id="contact">
            
            <div className="container" id="bookNow">
                <div className="row ">
                    <div className="col-md-6 contact-form ">
                        <form onSubmit= {sendEmail} >
                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Full Name" name="name" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" name="email" />
                            </div>
                            <div class="form-group mb-3">
                                   <input type="text" class="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div class="form-group mb-3">
                                <textarea type="text" class="form-control" cols="30" rows="8" placeholder="Your message" name="message" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="submit" class="btn btn-success" value="Send Message" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 mt-5 text-white">
                        <h4>Address: Add your address, Argentina</h4>
                        <h4>Phone: 305-306-9922</h4>
                        <h4>Email: sprinter@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;