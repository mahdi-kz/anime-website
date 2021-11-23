import React, {useState, useEffect} from 'react';
//import image1 from '../images/clients/international_client/1.webp';
//import image2 from '../images/clients/international_client/2.webp';
//import image3 from '../images/clients/international_client/3.webp';
//import image4 from '../images/clients/international_client/4.webp';
//import image5 from '../images/clients/international_client/5.webp';
//import image6 from '../images/clients/international_client/6.webp';
//import image7 from '../images/clients/international_client/7.webp';
//import image8 from '../images/clients/international_client/8.webp';
//import image9 from '../images/clients/local_client/1.webp';
//import image10 from '../images/clients/local_client/2.webp';
//import image11 from '../images/clients/local_client/3.webp';
//import image12 from '../images/clients/local_client/4.webp';
//import image13 from '../images/clients/local_client/5.webp';
//import image14 from '../images/clients/local_client/6.webp';
//import image15 from '../images/clients/local_client/7.webp';
//import image16 from '../images/clients/local_client/8.webp';
//import image17 from '../images/clients/local_client/9.webp';

import Navbar from '../components/Navbar';
import './Customers.css';
import { Container, Row, Col } from 'react-grid-system';
import {get_local_customers, get_global_customers} from '../admin/call_api'


export default function Awards(){
    const [internationalClients, setInternationalClients] = useState([]);
    const [localClients, setLocalClients] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getInternationalClients();
        getLocalClients();
    }, [])

    async function getLocalClients(){
        while (localClients.length > 0){
            localClients.pop();
        }
        get_local_customers().then((res)=>{
            let list = []
            res.map(cus=>{list.push(cus)})
            setLocalClients(list)
        });
    }
    async function getInternationalClients(){
        while (internationalClients.length > 0){
            internationalClients.pop();
        }
        get_global_customers().then((res)=>{
            let list = []
            res.map(cus=>{list.push(cus)})
            setInternationalClients(list);
        });
    }

	return(
		<>
            <Navbar showLogo={true} />
            <div className="customer-container">
                <div className="customers-box">
                    <div className="services-header">Who we turned geri?</div>
                    <div className="clients-title">International Clients</div>
                    <div className="international-container">
                        <Container fluid className="customer-logo-box">

                                <Row className='customer-row'>
                                    {internationalClients.map(obj2=>{
                                        return (<Col xs={4} md={3} xl={2}>
                                            <div data-aos="zoom-in" className="customer-logo" style={{width:"100%", marginBottom:20}}> 
                                                <img className="customer-logo-img" alt="bmw" src={obj2.logo_address} />
                                            </div>
                                        </Col>)
                                    })}
                                </Row>

                        </Container>
                    </div>
                    <div className="clients-title-box">
                        <p className="clients-title">Local Clients</p>
                        <Container fluid className="customer-logo-box">

                                <Row className='customer-row'>
                                    {localClients.map(obj2=>{
                                        return (<Col xs={6} md={4} xl={2}>
                                            <div data-aos="zoom-in" className="customer-logo" style={{width:"100%", marginBottom:20}}> 
                                                <img className="customer-logo-img" alt="bmw" src={obj2.logo_address} />
                                            </div>                                      
                                        </Col>)
                                    })}
                                </Row>

                        </Container>
                    </div>
                </div>
            </div>
		</>
	)
}
