import {GET_CUSTOMERS, ADD_CUSTOMER,DELETE_CUSTOMER } from '../constants/ActionTypes';
import axios from "axios";
import history from '../history'
const API_URL = 'http://localhost:3001/api/';

export const getCustomers = () => dispatch => {
    return fetch(API_URL+'customers')
    .then((response) => {
        return response.json();
       })
      .then(result => {
        console.log("customers actions ", result);
        dispatch({
            type: GET_CUSTOMERS,
            payload: result.customers
          });
      });
    }


    export const addCustomer = (customer) => {
        console.log("customer ", customer);
            return (dispatch) => {
                return axios.post(API_URL+'customers/', customer)
                    .then((res) => {
                        console.log("response ", res);
                        dispatch({ type: ADD_CUSTOMER, payload : res.data.result })
                        history.push(`/customers`)

                    });
            }
          }
    
    export const updateCustomer = (customer) => {
            console.log("udpate customer customer customer ", customer);
                return (dispatch) => {
                    return axios.put(API_URL+'customers/', customer)
                        .then((res) => {
                            console.log("response ", res);
                            
                            history.push(`/customers`)
                        });
                }
    }

    export const deleteCustomer = (customer) => {
        return (dispatch) => {
            return axios.delete(API_URL+'customers', {data : customer})
                .then((res) => {
                    dispatch({ type: DELETE_CUSTOMER, payload : customer })
                });
        }
    }
