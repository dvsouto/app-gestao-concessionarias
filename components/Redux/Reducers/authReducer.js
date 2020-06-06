/**
 * AuthReducer
 * State de autenticação
 * @author Davi Souto
 * @since 21/08/2018
 */

import { createReducer } from 'redux';
import { getCurrentDateTime } from 'AppGestao/library/DateLib';
import Store from 'AppGestao/components/Redux/Store';

import { AsyncStorage } from "react-native";

const initialState = {
    form_login: {
      cod_acesso: "",
      senha: "",
    },
    loading: false,
    status: '',
    error: false,
    session: false,
    token: false,
    loadingStorage: true
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_COD_ACESSO':
          return {
            ...state,
            form_login: {
              ...state.form_login,
              cod_acesso: action.cod_acesso
            }
          };

        case 'SET_SENHA':
          return {
            ...state,
            form_login: {
              ...state.form_login,
              senha: action.senha
            }
          };

        case 'SET_PERSISTED_DATA':
          return {
            ...state,
            session: action.session,
            token: action.token,
            form_login: {
              ...state.form_login,
              cod_acesso: action.cod_acesso
            }
          }

        // case 'GET_PERSISTED_DATA':
        //   persisted_data = {
        //     email: { data: false, loaded: false },
        //     session: { data: false, loaded: false },
        //     token: { data: false, loaded: false }
        //   }
        //
        //   DispatchDataLoaded = () => {
        //     if (persisted_data.email.loaded && persisted_data.session.loaded && persisted_data.token.loaded)
        //     {
        //       Store.dispatch({
        //         type: 'GET_PERSISTED_DATA_LOADED',
        //         email: persisted_data.email.data,
        //         session: persisted_data.session.data,
        //         token: persisted_data.token.data
        //       })
        //     }
        //
        //     return false;
        //   }
        //
        //   AsyncStorage.getItem("@authReducer:form_login.cod_acesso").then((_email) => {
        //     persisted_data.email.data = _email;
        //     persisted_data.email.loaded = true;
        //
        //     DispatchDataLoaded();
        //   });
        //
        //   AsyncStorage.getItem("@session").then((_session) => {
        //     persisted_data.session.data = _session;
        //     persisted_data.session.loaded = true;
        //
        //     DispatchDataLoaded();
        //   });
        //
        //   AsyncStorage.getItem("@token").then((_token) => {
        //     persisted_data.token.data = _token;
        //     persisted_data.token.loaded = true;
        //
        //     DispatchDataLoaded();
        //   });
        //
        //   return {
        //     ...state,
        //     loadingStorage: true
        //   };
        //
        // case 'GET_PERSISTED_DATA_LOADED':
        //   return {
        //     ...state,
        //     form_login: {
        //       ...state.form_login,
        //       cod_acesso: action.email
        //     },
        //     session: action.session,
        //     token: action.token,
        //     loadingStorage: true
        //   }

        ///////////////////////////////////////////////////////

        case 'DO_LOGIN':
          return {
            ...state,
            loading: true,
            error: false,
            session: false,
            token: false
          };

        case 'DO_LOGIN_SUCCESS':
          console.log("xicas" + action.payload);

          if (action.payload.data === undefined)
          {
            status = 'error';
            session = false;
            token = false;
            error = "Não foi possível se conectar com o servidor";
          } else {
            status = (! action.payload.data.success || action.payload.data.success == 'false') ? 'error' : 'success';
            session = (action.payload.data.session) ? action.payload.data.session.Session || false : false;
            token = action.payload.data.api_key || false;
            error = action.payload.data.msg || ""

            // Persistir e-mail e sessão
            if (status == 'success')
            {
              AsyncStorage.setItem("@authReducer:form_login.cod_acesso", state.form_login.cod_acesso);
              AsyncStorage.setItem("@session", JSON.stringify(session));
              AsyncStorage.setItem("@token", token);
            }
          }

          return {
            ...state,
            loading: false,
            status: status,
            session: session,
            token: token,
            form_login: {
              ...state.form_login,
              senha: ""
            },
            error: error
          };

        case 'DO_LOGIN_FAIL':
          return {
            ...state,
            loading: false,
            status: 'error',
            error: action.payload.msg || "Ocorreu um erro durante o login"
          };


        case 'DO_LOGOUT':
          // Apagar sessão
          AsyncStorage.removeItem("@session");
          AsyncStorage.removeItem("@token");

          return {
            ...state,
            session: false,
            token: false
            // authenticated: {
            //   is_authenticated: false,
            //   user_auth: null,
            //   date_auth: null,
            //   name: ""
            // }
          }

        default:
          return state;
    }
}
