import {GET_CUSTOMERS, VIEW_CUSTOMER, ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER} from '../constants/ActionTypes'
const initialState = {
    customers : [],
    customer : {}
}
const customerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CUSTOMER:
            return {
                ...state,
                customers : [...state.customers,...action.payload]
            }
        case GET_CUSTOMERS:
        return {
            ...state,
            customers : action.payload,
            customer : {
                isSingleCustomerView : false
            }
        }

        case DELETE_CUSTOMER:
            let customers = state.customers.filter(customer =>
                customer._id !== action.payload._id
            )
            return {
                ...state,
                customers : customers
            }

        case UPDATE_CUSTOMER:
        return {
            ...state,
           customer : {isSingleCustomerView : false},
           refreshList : false
        };

      case VIEW_CUSTOMER:
            return {
                ...state,
                customers : action.payload,
                customer : {
                    isSingleCustomerView : false
                }
            };
      default:
        return state
    }
}

export default customerReducer;