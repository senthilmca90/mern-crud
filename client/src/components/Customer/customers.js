import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers, deleteCustomer} from '../../actions/customerAction'
import './customers.css';
import history from "../../history"
class Customers extends Component {

    constructor(props){
        super(props);
        this.viewCustomer = this.viewCustomer.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
      }
  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.object.isRequired
  }

  deleteCustomer(customer){
      console.log(`delete customer `, customer);
      this.props.deleteCustomer(customer);
  }
  viewCustomer = (viewCustomerDetails) => {
    console.log("this.state ", viewCustomerDetails);
     history.push('/customer/view', {'customer' : viewCustomerDetails})
  }

  render() {

    const { customers } = this.props.customers;

    const  customerList = (
        <div>
          
        <div className="col-lg-12 table-responsive">
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>

        {
            customers.map((customer,index) =>
          <tr key={index}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td> <i className="fa fa-edit btn btn-info" onClick={() => this.viewCustomer(customer)}> </i>   &nbsp;
            <i className="fa fa-trash btn btn-danger" onClick={()=>this.deleteCustomer(customer)}> </i></td>
          </tr>
        )
        }
        
        </tbody>
      </table>
      </div>
        </div>
        )


    return (
      <div className="row">
      <div className="col-lg-12">
              <Link to={`/customer/new`} ><button className="btn btn-success pull-right" >New Customer</button></Link>
        </div>
        <div className="col-lg-12 text-center">
            {
                customers.length ==0 ? 'No Customers Create New Customers' :customerList
            }
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const mapDispatchToProps = (dispatch) => ({
   getCustomers: () => dispatch(getCustomers()),
   deleteCustomer: (customer) => dispatch(deleteCustomer(customer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
