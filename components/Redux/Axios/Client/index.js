/**
 * Axios client
 * @author Davi Souto
 * @since 10/09/2018
 */

import axios from 'axios';
import Store from 'AppGestao/components/Redux/Store';
import { Alert } from 'react-native';

import Environment from 'AppGestao/Environment';
import NavigationService from 'AppGestao/components/Navigator/NavigationService';

export default Client = axios.create({
  baseURL: Environment.apiUrl,
  responseType: 'json'
});

///////////////////////////////////////////////

/**
 * Retorna o header de requisição
 */
export const RequestHeaders = () => {
  return {
    "Mobile": Store.getState().authState.token
  }
}

/**
 * Interceptadores de requisições
 */
export const AxiosInterceptors = () => {
  // let requestInterceptor = () => [
  //   {
  //     success: function ({getState, dispatch, getSourceAction}, req) {
  //       return req;
  //     },
  //     error: function ({getState, dispatch, getSourceAction}, error) {
  //       return error;
  //     }
  //   }
  // ];

  let responseInterceptor = () => [
    {
      success: function ({getState, dispatch, getSourceAction}, req) {
        console.log("REQUEST:", req);
        // Verificar se a sessão não foi sobrescrita
        if (! req.data.success || req.data.success == 'false')
        {
          if (req.data.code == 401)
          {
            Alert.alert("Autenticação", "Sua sessão expirou, por favor efetue o login novamente");
            NavigationService.navigate('Auth');
          }

          if (req.data.code == 399)
          {
            Alert.alert("Acesso", "Você não tem acesso a esta funcionalidade, entre em contato com seu superior");
          }

          console.log(req.data);
        }

        return req;
      },
      error: function ({getState, dispatch, getSourceAction}, error) {
        console.log("ERRO:", error);
        return error;
      }
    }
  ];

  return {
    // request: requestInterceptor(),
    response: responseInterceptor()
  };
}
