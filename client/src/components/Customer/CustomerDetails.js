import React from 'react';
import { updateCustomer } from '../../actions/customerAction';
import {connect } from 'react-redux';
import history from '../../history'

class CustomerDetails extends React.Component {
    constructor(props){
        super(props);
        const location = history.location
        this.state = location.state;
        this.handleUpdate = this.handleUpdate.bind(this);
    }

handleChangeFor = (propertyName) => (event) => {
    const { customer } = this.state;
    const customerDetails = {
      ...customer,
      [propertyName]: event.target.value
    };
    this.setState({ customer: customerDetails });
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log("this.state ", this.state)
    console.log("this.props ", this.props)
    this.props.updateCustomer(this.state.customer);
  }

  render(){

    return(
        <div className="customerDetail">
            <h2>Customer Detail</h2>
                <div>
                </div>
            {
                <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
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
                    name="lastName"
                    autoComplete="off"
                    onChange={this.handleChangeFor('lastName')} value={this.state.customer.lastName}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  UPDATE
                </button>
               </form>

              }
            
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      customers: state.customers
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    updateCustomer : customer => dispatch(updateCustomer(customer))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CustomerDetails);