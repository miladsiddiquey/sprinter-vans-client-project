import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CardInfo = ({ fleet }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center">

            <div class="card" style={{width:'25rem',height:'30rem'}}
            
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
            
            >
                <img src={fleet.img} class="card-img-top" alt="..." style={{height:'200px'}} />
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{fleet.name}</h5>
                        <h5 className="card-title">{fleet.hour}</h5>
                    </div>
                    <li>{fleet.first}</li>
                    <li>{fleet.secend}</li>
                    <li>{fleet.therd}</li>
                    <li>{fleet.fourth}</li>
                    <li>{fleet.fifth}</li>
                    <li>{fleet.sixth}</li>
                </div>
            </div>
           
<br/>
        </div>
    );
};

export default CardInfo;