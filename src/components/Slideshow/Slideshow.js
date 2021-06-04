import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    return (
        <div className="slide-container ">
        <Slide>
          <div className="each-slide">
            <div>
                <img className='img-fluid' src="https://i.ibb.co/r6WzYzk/slide-1.webp" alt="" style={{height:'450px'}}/>            
            </div>
          </div>
          <div className="each-slide">
          <div>
                <img className='img-fluid' src="https://i.ibb.co/KqNn3Tj/slide-2.webp" alt="" style={{height:'450px'}}/>            
            </div>
          </div>
          <div className="each-slide">
          <div>
                <img className='img-fluid' src="https://i.ibb.co/2KBwF1m/slide-3.webp" alt="" style={{height:'450px'}} />            
            </div>
          </div>
        </Slide>
      </div>
    );
};

export default Slideshow;