import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home'

import Customers from './components/Customer/customers'
import CreateCustomer from './components/Customer/CreateCustomer'
import CustomerDetails from "./components/Customer/CustomerDetails";

const routing = () =>(
    <div>
    <Switch>
    <Route exact path="/" component={Home} label="Home"/>

        <Route path="/customers" component={Customers} />
        <Route path="/customer/view" component={CustomerDetails} />
        <Route path="/customer/new" component={CreateCustomer} />
    
    </Switch>
    </div>
)
export default routing;


