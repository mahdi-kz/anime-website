import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import './Customers.css';
import { Container, Row, Col } from 'react-grid-system';
import {get_local_customers, get_global_customers} from '../admin/call_api'
import backgroundImage from '../images/background/production-bg.webp';
import backgroundImage1 from '../images/background/customers-bg-1.webp';

export default function Awards(){
    const [internationalClients, setInternationalClients] = useState([]);
    const [localClients, setLocalClients] = useState([]);
    const [showLogo, setShowLogo] = useState(true);

    useEffect(()=>{
        getInternationalClients();
        getLocalClients();
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
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
		<div style={{
            backgroundImage:`url(${backgroundImage})`, 
            backgroundPosition:'center',
            height:window.innerHeight,
            backgroundRepeat: 'no-repeat',
            backgroundSize:"cover",
            backgroundAttachment: 'fixed'
            }}
        >
            <div className='customer-background-elements'>
		        <img src={backgroundImage1} data-aos={'zoom-in'} className='customer-bg-1'/>
		    </div>

            <Navbar showLogo={showLogo} />
            <div className="customer-container">
                <div className="customers-box">
                    <div className="services-header customers-title">Who we turned grei?</div>
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
                                        return (<Col xs={4} md={3} xl={2}>
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
		</div>
	)
}
