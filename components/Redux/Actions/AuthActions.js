/**
 * Actions de autenticação
 * @author Davi Souto
 * @since 04/09/2018
 */

export const setCodAcesso = value => ({
  type: 'SET_COD_ACESSO',
  cod_acesso: value
});

export const setSenha = value => ({
  type: 'SET_SENHA',
  senha: value
});

export const getPersistedData = () => ({
  type: 'GET_PERSISTED_DATA'
});

export const setPersistedData = (data) => ({
  type: 'SET_PERSISTED_DATA',
  cod_acesso: data.cod_acesso,
  session: data.session,
  token: data.token
});

///////////////////////////////////////////////

export const doLogin = (email, senha) => {
  let request = {
    method: 'post',
    url: 'login',
    data: {
      email: email,
      senha: senha,
      api: true
    }
  }

  return {
    type: "DO_LOGIN",
    payload: {
      request: request,
    }
  }
}


export const doLogout = () => ({
  type: 'DO_LOGOUT'
});
