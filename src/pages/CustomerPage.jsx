import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { customers } from "../data";


const CustomerPage = () => {
    const {id} = useParams();
    const [customerId, setCustomerId] = useState(0);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        getCustomerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setCustomer(customers[customerId-1]);
    },[customerId])

    const getCustomerDetails = () => {
        console.log(id);
        const customer= customers.find((cust) => cust.id === +id);
        console.log(customer);
        if(!customer) return setCustomerId(0);
        setCustomerId(customer.id);
    }

    if(customerId === 0) {
        return (
            <h1>Customer doesnt exist</h1>
        )
    }
    return (
        <>
            <h1>Customer Exists {customerId}</h1>
            <h4>{customer?.name}</h4>
            <h4>{customer?.phone}</h4>
        </>
    );
}
 
export default CustomerPage;