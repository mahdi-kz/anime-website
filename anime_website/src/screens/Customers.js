import React, {useState, useEffect} from 'react';
import image1 from '../images/clients/international_client/1.webp';
import image2 from '../images/clients/international_client/2.webp';
import image3 from '../images/clients/international_client/3.webp';
import image4 from '../images/clients/international_client/4.webp';
import image5 from '../images/clients/international_client/5.webp';
import image6 from '../images/clients/international_client/6.webp';
import image7 from '../images/clients/international_client/7.webp';
import image8 from '../images/clients/international_client/8.webp';
import image9 from '../images/clients/local_client/1.webp';
import image10 from '../images/clients/local_client/2.webp';
import image11 from '../images/clients/local_client/3.webp';
import image12 from '../images/clients/local_client/4.webp';
import image13 from '../images/clients/local_client/5.webp';
import image14 from '../images/clients/local_client/6.webp';
import image15 from '../images/clients/local_client/7.webp';
import image16 from '../images/clients/local_client/8.webp';
import image17 from '../images/clients/local_client/9.webp';

import Navbar from '../components/Navbar';
import './Customers.css';
import { Container, Row, Col } from 'react-grid-system';


export default function Awards(){
    const [internationalClints, setInternationalClints] = useState([]);
    const [localClints, setLocalClints] = useState([]);

    useEffect(()=>{
        getCustomers();
    }, [])

    const getCustomers = ()=>{
        setInternationalClints([
           [{
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            },
            {
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            },
            {
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            },
            {
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            },
            {
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            },
            {
                name:"image1",
                image:image1
           },
           {
                name:"image2",
                image:image2
           },
           {
                name:"image3",
                image:image3
           },
           {
                name:"image4",
                image:image4
           },
           {
                name:"image5",
                image:image5
           },   
           {
                name:"image6",
                image:image6
           },
           {
                name:"  image7",
                image:image7
            },
            {
                name:"image8",
                image:image8
            }]
        ])
        setLocalClints([
            [{
                 name:"  image1",
                 image:image9
            },
            {
                 name:"image2",
                 image:image10
            },
            {
                 name:"image3",
                 image:image11
            },
            {
                 name:"image4",
                 image:image12
            },
            {
                 name:"image5",
                 image:image13
            },   
            {
                 name:"image6",
                 image:image14
            },
            {
                 name:"  image1",
                 image:image15
             },
             {
                 name:"image2",
                 image:image16
             },
             {
                 name:"image3",
                 image:image17
             },
             {
                name:"  image1",
                image:image9
            },
            {
                    name:"image2",
                    image:image10
            },
            {
                    name:"image3",
                    image:image11
            },
            {
                    name:"image4",
                    image:image12
            },
            {
                    name:"image5",
                    image:image13
            },   
            {
                    name:"image6",
                    image:image14
            },
            {
                name:"  image1",
                image:image15
            },
            {
                name:"image2",
                image:image16
            },
            {
                name:"image3",
                image:image17
            },{
                name:"image6",
                image:image14
           },
           {
                name:"  image1",
                image:image15
            },
            {
                name:"image2",
                image:image16
            },
            {
                name:"image3",
                image:image17
            },
            {
               name:"  image1",
               image:image9
           },
           {
                   name:"image2",
                   image:image10
           },
           {
                   name:"image3",
                   image:image11
           },
           {
                   name:"image4",
                   image:image12
           },
           {
                   name:"image5",
                   image:image13
           },   
           {
                   name:"image6",
                   image:image14
           },
           {
               name:"  image1",
               image:image15
           },
           {
               name:"image2",
               image:image16
           },
           {
               name:"image3",
               image:image17
           },{
                 name:"  image1",
                 image:image9
            },
            {
                 name:"image2",
                 image:image10
            },
            {
                 name:"image3",
                 image:image11
            },
            {
                 name:"image4",
                 image:image12
            },
            {
                 name:"image5",
                 image:image13
            },   
            {
                 name:"image6",
                 image:image14
            },
            {
                 name:"  image1",
                 image:image15
             },
             {
                 name:"image2",
                 image:image16
             },
             {
                 name:"image3",
                 image:image17
             },
             {
                name:"  image1",
                image:image9
            },]
         ])
    }

	return(
		<>
            <Navbar showLogo={true} />
            <div className="customer-container">
                <div className="customers-box">
                    <div className="services-header">Who turned we geri?</div>
                    <div className="clients-title">International Clients</div>
                    <div className="international-container">
                        <Container fluid className="customer-logo-box">
                            {internationalClints.map(obj=>
                                <Row className='customer-row'>
                                    {obj.map(obj2=>{
                                        return (<Col xs={4} md={3} xl={2}>
                                            <div data-aos="zoom-in" className="customer-logo" style={{width:"100%", marginBottom:20}}> 
                                                <img className="customer-logo-img" alt="bmw" src={obj2.image} />   
                                            </div>                                 
                                        </Col>)
                                    })}
                                </Row>
                            )}
                        </Container>
                    </div>
                    <div className="clients-title-box">
                        <p className="clients-title">Local Clients</p>
                        <Container fluid className="customer-logo-box">
                            {localClints.map(obj=>
                                <Row className='customer-row'>
                                    {obj.map(obj2=>{
                                        return (<Col xs={6} md={4} xl={2}>
                                            <div data-aos="zoom-in" className="customer-logo" style={{width:"100%", marginBottom:20}}> 
                                                <img className="customer-logo-img" alt="bmw" src={obj2.image} />   
                                            </div>                                      
                                        </Col>)
                                    })}
                                </Row>
                            )}
                        </Container>
                    </div>
                </div>
            </div>
		</>
	)
}
