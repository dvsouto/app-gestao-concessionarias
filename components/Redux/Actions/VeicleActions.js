/**
 * Actions de veículos
 * @author Davi Souto
 * @since 18/09/2018
 */

import { RequestHeaders } from 'AppGestao/components/Redux/Axios/Client';

export const getVeicle = (id_veiculo) => {
  let request = {
    method: 'get',
    url: 'veiculo/editar/' + id_veiculo,
    headers: RequestHeaders(),
  }

  return {
    type: "GET_VEICLE",
    payload: {
      request: request
    }
  }
}

export const createVeicle = (veicle) => {
  let headers = RequestHeaders();
  headers['Content-Type'] = "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2);
  // headers['Content-Type'] = undefined;

  let data = new FormData();

  for(var key in veicle) {
    if (key == 'imagens' || key == 'imagensCount')
      continue;

    data.append(key, veicle[key]);
  }

  var i_file = 0;

  // Upload de imagens
  veicle.imagens.forEach(function(img, i){
    if (img.status == "upload")
    {
      posicao = "";

      if (img.label && img.type != "extra")
        posicao = img.label;

      data.append('files_api[' + i_file + '][label]', img.label_id || "");
      data.append('files_api[' + i_file + '][posicao]', posicao);
      data.append('files_api[' + i_file + '][ordem]', img.ordem);
      data.append('files_api[' + i_file + '][file]', {
        uri: img.imagem,
        type: 'image/jpeg',
        name: String(Date.now()) + Math.floor(Math.random()*10000) + '.jpg',
      });

      i_file += 1;
    }
  });

  let request = {
    method: 'post',
    url: 'veiculo/create',
    headers: headers,
    data: data
  }

  return {
    type: "CREATE_VEICLE",
    payload: {
      request: request
    }
  }
}

export const updateVeicle = (veicle) => {
  let headers = RequestHeaders();
  headers['Content-Type'] = "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2);

  let data = new FormData();

  for(var key in veicle) {
    if (key == 'imagens' || key == 'imagensCount')
      continue;

    data.append(key, veicle[key]);
  }

  var i_file = 0;

  // Upload de imagens
  veicle.imagens.forEach(function(img, i){
    if (img.status == "upload")
    {
      posicao = "";

      if (img.label && img.type != "extra")
        posicao = img.label;

      data.append('files_api[' + i_file + '][label]', img.label_id || "");
      data.append('files_api[' + i_file + '][posicao]', posicao);
      data.append('files_api[' + i_file + '][ordem]', img.ordem);
      data.append('files_api[' + i_file + '][file]', {
        uri: img.imagem,
        type: 'image/jpeg',
        name: String(Date.now()) + Math.floor(Math.random()*10000) + '.jpg',
      });

      i_file += 1;
    }
  });

  console.log("VEICLEEEEEE:", veicle);

  let request = {
    method: 'post',
    url: 'veiculo/editar/' + veicle.id,
    headers: headers,
    data: data,
  }

  return {
    type: "UPDATE_VEICLE",
    payload: {
      request: request
    }
  }
}


export const getPicureLabels = () => {
  let request = {
    method: 'get',
    url: 'veiculo/cadastrar',
    headers: RequestHeaders()
  }

  return {
    type: "GET_PICTURE_LABELS",
    payload: {
      request: request
    }
  }
}

/////////////////////////////////////////////////////

export const getVeicleDataByCarPlate = (plate) => {
  let request = {
    method: 'get',
    url: 'webservice/busca/nacional/' + plate,
    headers: RequestHeaders()
  }

  return {
    type: "GET_VEICLE_DATA_BY_CAR_PLATE",
    payload: {
      request: request
    }
  }
}

export const resetVeicleData = () => ({
  type: 'RESET_VEICLE_DATA'
});

export const setVeicleCarPlate = value => ({
  type: 'SET_VEICLE_CAR_PLATE',
  placa: value
});

export const setVeicleValorVenda = value => ({
  type: 'SET_VEICLE_VALOR_VENDA',
  valorvenda: value
});
