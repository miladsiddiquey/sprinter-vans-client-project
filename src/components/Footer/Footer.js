import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#000',padding:'15px'}}>
            <p className="text-center text-white ">
                &copy; {new Date().getFullYear()} Miami Sprinter Vans - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;