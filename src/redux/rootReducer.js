// rootReducer.js
import { combineReducers } from 'redux';
import { productReducer } from './reducer'; // Import your actual reducer

const rootReducer = combineReducers({
    product: productReducer, // Use a meaningful key for this reducer
});

export default rootReducer;
