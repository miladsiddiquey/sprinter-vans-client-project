import React from 'react';
import './ServiceInfo.css'

const ServiceInfo = ({services}) => {
    return (
        <div className="col-md-4 d-flex justify-content-center">
            
            <div className="single_serviceBox ">
            <img className="img-fluid" src={services.img} alt="" style={{height:'300px',width:'350px',marginTop:'30px'}} />
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3 className="text-center">{services.name} </h3>
                    <hr />
                    {/* <p>{description}</p> */}
                    <div className="d-flex justify-content-around">
                        {/* <h3 className="price">${price}</h3> */}
                    <button className="btn btn-light fw-bold btn-sm btn-buy">Book now</button>
                    </div>

                    {/* <Link to={`/order/$(_id)`}><button className="btn btn-light fw-bold btn-sm">Book now</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;