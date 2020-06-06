/**
 * StockReducer
 * State de veículos em estoque
 * @author Davi Souto
 * @since 10/09/2018
 */

import { createReducer } from 'redux';
import Environment from 'AppGestao/Environment';

const initialState = {
    stock: [],
    loading: true,
    refreshStock: false,
    error: false,
}

export const stockReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_STOCK":
          return {
            ...state,
            loading: true
          }

        case "GET_STOCK_SUCCESS":
          let stock = action.payload.data;

          stock.map(function(item_stock){
            let imagens = [];

            item_stock.files.files.forEach(function(img){
              let imagem = {
                "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
                "label": img.posicao || "",
                "type": "predefined",
                "status": "loaded"
              }

              imagens.push(imagem);
            });

            item_stock.extra.files.forEach(function(img){
              let imagem = {
                "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
                "label": img.posicao || "Extra",
                "type": "extra",
                "status": "loaded"
              }

              imagens.push(imagem);
            });

            if (imagens.length <= 0)
            {
              imagens.push({
                "imagem": false,
                "label": "Extra",
                "type": "extra",
                "status": "empty"
              });
            }

            item_stock.imagens = imagens;
            item_stock.imagensCount = item_stock.imagens.length;

            return stock;
          });

          return {
            ...state,
            loading: false,
            stock: stock
          }

        case "GET_STOCK_FAIL":
          return {
            ...state,
            loading: false,
            error: "Erro ao buscar veículos em estoque"
          }

        /////////////////////////////////////////////////

        case "SET_REFRESH_STOCK":
          return {
            ...state,
            refreshStock: action.refreshStock
          }

        default:
          return state;
    }
}
