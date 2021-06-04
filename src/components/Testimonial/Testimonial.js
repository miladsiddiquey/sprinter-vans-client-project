import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="bg-dark">
            <div className="container ">
                <h2 className="text-center text-white pt-5">REVIEWS</h2>
            <div className="slide-container ">
                <Slide style={{ width: '70%', margin: 'auto', color:'white',paddingBottom:'20px' }}>
                    <div className="each-slide">
                        <div style={{ marginTop: '70px' }}>
                            <div className="img-area text-center">
                                <img src="https://i.ibb.co/DpQn75F/a.jpg" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </div><br />
                            <div className="">
                                <h3 className="text-center">Susan G.</h3>
                                <br />

                                <p style={{ fontSize: '18px', margin: 'auto', width: '70%' }} className="text-center">"Very professional, no gimmicks highly recommend."</p>

                            </div>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ marginTop: '70px' }}>
                            <div className="img-area text-center">
                                <img src="https://i.ibb.co/Nr02bN4/b.jpg" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </div><br />
                            <div className="">
                                <h3 className="text-center">Alex B</h3>
                                <br />

                                <p style={{ fontSize: '18px', margin: 'auto', width: '70%' }} className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. doloremque dolorum obcaecati laborum porro? Expedita, vel mollitia repellat quae, maiores corrupti ?</p>

                            </div>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ marginTop: '70px' }}>
                            <div className="img-area text-center">
                                <img src="https://i.ibb.co/rvs7F2n/c.jpg" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </div><br />
                            <div className="">
                                <h3 className="text-center">Nathan C</h3>
                                <br />

                                <p style={{ fontSize: '18px', margin: 'auto', width: '70%' }} className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. doloremque  vel mollitia repellat quae, maiores corrupti eos culpa officiis consequatur sequi aliquid. Rerum, possimus consectetur?</p>

                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;