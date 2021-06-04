import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
    const services = [
        {
            img:'https://i.ibb.co/HtgjRGq/service-1.webp',
            name:'abc'
        },
        {
            img:'https://i.ibb.co/KqNn3Tj/slide-2.webp' ,
            name:'abc'
        },
        {
            img:'https://i.ibb.co/r6WzYzk/slide-1.webp' ,
            name:'abc'
        },
        {
            img:' https://i.ibb.co/swgqn8F/service-7.webp',
            name:'abc'
        },
        {
            img:'https://i.ibb.co/ZV37z9W/service-6.webp' ,
            name:'abc'
        },
        {
            img:'https://i.ibb.co/M6tVzBD/service-5.webp' ,
            name:'abc'
        },
        {
            img:'https://i.ibb.co/6ts7Vvy/service-4.webp' ,
            name:'abc'
        },
        {
            img:'https://i.ibb.co/Zd6YCPZ/service-3.webp' ,
            name:'abc'
        },
         {
            img:'https://i.ibb.co/bzNpq44/service-2.webp' ,
            name:'abc'
        }
    ]
    return (
        <div className="container">
            <h2  style={{marginTop:'40px'}}>Our Services</h2>
            
            <div className="row ">
                {
                    services.map(services => <ServiceInfo services={services}></ServiceInfo>)
                }
            </div>
        </div>
    );
};

export default Service;