import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import {Link} from 'react-router-dom'



const Card = () => {
    const fleet = [
        {
            name:'8 Passenger CEO 4 HR MINIMUM',
            hour:'150/hr',
            img:'https://i.ibb.co/yYWwnjr/abc.webp',
            first:'Fully automatic partition and intercom system.',
            secend:'Three fold out tables',
            therd:'Premium surround sound with 12" subwoofer',
            fourth:'Two 42" TV',
            fifth: 'Bar, Ice box, & Refrigerator',
            sixth: ' Maybach ceiling'
            
            

        },
        {
            name:'2020 Rolls Royce Cullinan 3 HR MINIMUM',
            hour:'300/hr',
            img:'https://i.ibb.co/9qjj7zf/def.webp',
            first:'Starlight Ceiling',
            secend:'two fold out tables',
            therd:'Mandarin Hermes Interior',
            fourth:'Rear entertainment system',
            fifth: 'Sheep skin rugs',
            sixth: ' Privacy curtains and  Bespoke surround sound '
            

        },{
            name:'8 Passenger CEO Beige Interior 4 HR MINIMUM  ',
            hour:'150/hr',
            img:'https://i.ibb.co/wSq4CPF/ghj.webp',
            first:'Fully automatic partition and intercom system.',
            secend:'Three fold out tables',
            therd:'Premium surround sound with 12" subwoofer',
            fourth:'Two 42" TV',
            fifth: 'Bar, Ice box, & Refrigerator',
            sixth: ' Maybach ceiling'

        }
    ]
    return (
       <div style={{backgroundColor:'#000'}}>
            <div className="container" id="fleet" >
            <h2 style={{marginTop:'50px',color:'white',paddingTop:'20px'}}>Our Fleet</h2><br/>
            <div className="row">
                {
                    fleet.map(fleet=><CardInfo fleet={fleet}></CardInfo>)
                }
                
            </div><br/>
            <div className="text-center">
                <Link to = "/fleet" className="btn btn-outline-success ">ALL FLEET</Link>
                </div>
                
                <br/>
        </div>
    
       </div>
    );
};

export default Card;