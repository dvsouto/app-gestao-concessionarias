/**
 * Actions de estoque
 * @author Davi Souto
 * @since 10/09/2018
 */

import { RequestHeaders } from 'AppGestao/components/Redux/Axios/Client';

// import { GET_STOCK } from 'AppGestao/components/Redux/Reducers/veicleReducer';

export const getStockVeicles = () => {
  let request = {
    method: 'get',
    url: 'veiculos',
    headers: RequestHeaders(),
  }

  return {
    type: "GET_STOCK",
    payload: {
      request: request
    }
  }
}

export const setRefreshStock = (refreshStock) => {
  return {
    type: "SET_REFRESH_STOCK",
    refreshStock: refreshStock
  }
}
