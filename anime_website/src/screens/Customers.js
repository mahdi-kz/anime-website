import React, {useState, useEffect} from 'react';
import image1 from '../images/logo1.png';
import Navbar from '../components/Navbar';
import './Customers.css';
import { Container, Row, Col } from 'react-grid-system';



export default function Awards(){
    const [customers, setCustomers] = useState([]);
    const [hide, setHide] = useState(true);

    useEffect(()=>{
        getCustomers()
        setTimeout(() => {
            setHide(false)
        }, 1000);
    }, [])

    const getCustomers = ()=>{
       const newCustomers = [
           [{
                name:"  image1",
                image:image1
           },
           {
                name:"image2",
                image:image1
           },
           {
                name:"image3",
                image:image1
           },
           {
                name:"image4",
                image:image1
           },
           {
                name:"image5",
                image:image1
           },   
           {
                name:"image6",
                image:image1
           }],
           [{
                name:"  image1",
                image:image1
            },
            {
                name:"image2",
                image:image1
            },
            {
                name:"image3",
                image:image1
            }],
        ]
       setCustomers(newCustomers)
    }

	return(
		<>
            <Navbar showLogo={false} />
            <div className="customerContainer">
                <p className="customersTitle">Who turned we geri?</p>
                <Container fluid className="customer-logo-box">
                    {customers.map(obj=>
                        <Row className='customer-row'>
                            {obj.map(obj2=>{
                                return (<Col xs={6} md={4} xl={2}>
                                    <img className="customerLogo" alt="bmw" src={obj2.image} />
                                    <p className={hide?"customer-name":"customer-name customer-name-show"}>{obj2.name}</p>
                            
                                </Col>)
                            })}
                        </Row>
                    )}
                </Container>
            </div>
		</>
	)
}
