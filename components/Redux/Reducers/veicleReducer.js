/**
 * VeicleReducer
 * State de veículo
 * @author Davi Souto
 * @since 10/09/2018
 */

import { createReducer } from 'redux';
import Environment from 'AppGestao/Environment';

const initialState = {
    veicle: {},
    loading: true,
    error: false
}

export const veicleReducer = (state = initialState, action) => {
    switch(action.type){

        case "GET_VEICLE":
          return {
            ...state,
            loading: true
          }

        case "GET_VEICLE_SUCCESS":
          veicle = action.payload.data.veiculo;
          imagens = [];

          veicle.files.files.forEach(function(img){
            let imagem = {
              "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
              "id_label": img.label,
              "label": img.posicao || "",
              "type": "predefined",
              "status": "loaded",
              "ordem": img.ordem
            }

            imagens.push(imagem);
          });

          veicle.extra.files.forEach(function(img, i){
            let imagem = {
              "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
              "label": img.posicao || "Extra",
              "type": "extra",
              "status": "loaded",
              "ordem": null //img.ordem || (i + veicle.imagens.length)
            }

            imagens.push(imagem);
          });

          imagens.push({
            "imagem": false,
            "label": "Extra",
            "type": "extra",
            "status": "empty",
            "ordem": null //veicle.imagens.length + 1
          });

          veicle.imagens = imagens;
          veicle.imagensCount = veicle.imagens.length;

          return {
            ...state,
            loading: false,
            veicle: veicle
          }

        case "GET_VEICLE_FAIL":
          return {
            ...state,
            loading: false,
            error: "Erro ao buscar veículo"
          }

        //////////////////////

        case "UPDATE_VEICLE":
          return {
            ...state,
            loading: true
          }

        case "UPDATE_VEICLE_SUCCESS":
          console.log("OK !", action.payload);

          return {
            ...state,
            loading: true
          }

        case "UPDATE_VEICLE_FAIL":
          return {
            ...state,
            loading: false,
            error: "Erro ao salvar veículo"
          }

        default:
          return state;
    }
}
