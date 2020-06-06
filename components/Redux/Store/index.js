/**
 * Redux Store
 * @author Davi Souto
 * @since 21/08/2018
 */

import { createStore, applyMiddleware } from 'redux';
import Reducers from 'AppGestao/components/Redux/Reducers';
import Client, { AxiosInterceptors } from 'AppGestao/components/Redux/Axios/Client';

import axiosMiddleware from 'redux-axios-middleware';

export default createStore(Reducers, applyMiddleware(
  axiosMiddleware(Client, { interceptors: AxiosInterceptors() })
));
