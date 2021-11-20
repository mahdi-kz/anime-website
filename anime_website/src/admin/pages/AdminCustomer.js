import React from 'react';
import {useState, useEffect} from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminCustomer.css'
import Customer from '../components/Customer';
import {get_customers} from '../call_api';


function AdminCustomer(){
    const [addNew, setAddNew] = useState(false);
    const [customers, setCustomers] = useState([
    ]);

    function addNewCustomer(){
        customers.push({'name': ''});
        setAddNew(!addNew);
    }

    function getCustomers(){
        while (customers.length > 0){
            customers.pop();
        }
        get_customers().then((res)=>{
            res.map(cus=>customers.push(cus))
            setAddNew(!addNew);
        });
    }
    useEffect(()=>{getCustomers()}, []);

    return(
        <>
            <div className='AdminCustomer'>
                <div className="AdminCustomerHeader">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewCustomer}/>
                </div>
                <div>
                    {customers.map(customer=>{
                        return (<Customer id={customer.id}
                        name={customer.name}
                        sequence={customer.sequence}
                        international={customer.international}
                        logo_address={customer.logo_address}/>)
                    })}
                </div>
            </div>
        </>
    )
}

export default AdminCustomer;