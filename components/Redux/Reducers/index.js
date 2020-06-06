/**
 * Redux Reducers
 * @author Davi Souto
 * @since 21/08/2018
 */

import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { stockReducer } from './stockReducer';
import { veicleReducer } from './veicleReducer';
import { createVeicleReducer } from './createVeicleReducer';

export default combineReducers({
    authState: authReducer,
    stockState: stockReducer,
    veicleState: veicleReducer,
    createVeicleState: createVeicleReducer
});
