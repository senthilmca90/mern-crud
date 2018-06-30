import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addCustomer} from '../../actions/customerAction'

class CreateCustomer extends Component {

    constructor() {
        super();
        this.state = {
            customer : {
                firstName : "",
                lastName : ""
            }
        };
        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeFor = (propertyName) => (event) => {
        const { customer } = this.state;
        const customerDetails = {
          ...customer,
          [propertyName]: event.target.value
        };
        this.setState({ customer: customerDetails });
      }
      
      handleSubmit(event) {
        event.preventDefault();
        console.log("test ", this.state.customer)
        this.props.addCustomer(this.state.customer);
      }
      render() {
    
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                autoComplete="off"
                onChange={this.handleChangeFor('firstName')} value={this.state.customer.firstName}
                />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                autoComplete="off"
                onChange={this.handleChangeFor('lastName')} value={this.state.customer.lastName}
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
            </button>
          </form>
        );
      }
}

const mapStateToProps = (state) => ({
  customer: state.customer
})

const mapDispatchToProps = (dispatch) => ({
    addCustomer: (data) => dispatch(addCustomer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);