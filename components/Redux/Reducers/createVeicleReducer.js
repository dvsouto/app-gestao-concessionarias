/**
 * WebserviceReducer
 * Retorna dados do webservice de consulta de veículos
 * @author Davi Souto
 * @since 20/11/2018
 */

const initialState = {
    veicle: {
      placa: '',
      marca: '',
      modelo: '',
      anofabricacao: 0,
      anomodelo: 0,
      cor: '',
      chassi: '',
      renavam: '',
      combustivel: '',
      tipodoveiculo: '',
      tipodemontagem: '',
      situacaodoveiculo: '',
      situacaodochassi: '',
      potencia: '',
      cilindradas: '',
      especiedoveiculo: '',
      tipodecarroceria: '',
      procedencia: '',
      municipio: '',
      uf: '',
      docproprietarioatual: '',
      nomeproprietarioatual: '',
      qtdeixos: '',
      // datashowroom: '',
      status: '',
      valorvenda: 0,
      margem: '',
      imagens: [],
      imagensCount: 0,
      // showroom: false
    },
    data: [],
    loadingVeicleData: false,
    loadedVeicleData: false,

    loadingPictureLabels: false,
    loadedPictureLabels: false,

    insertingVeicle: false,
    error: false
}

export const createVeicleReducer = (state = initialState, action) => {
    switch(action.type){
        /**
         * Criar veículo
         * @param Object veicle
         */
        case "GET_VEICLE_DATA_BY_CAR_PLATE":
          return {
            ...state,
            loadingVeicleData: true,
            loadedVeicleData: false,
            error: false
          }

        case "GET_VEICLE_DATA_BY_CAR_PLATE_SUCCESS":
          veicle = state.veicle;
          loadedVeicleData = false;
          error = false;

          if (action.payload.data && action.payload.data.RESPOSTA && action.payload.data.RESPOSTA.BINXML)
          {
            result = action.payload.data.RESPOSTA.BINXML;

            veicle.marca = result.MARCAMODELO.split("/")[0].trim();
            veicle.modelo = result.MARCAMODELO.split("/")[1].trim();
            veicle.anofabricacao = parseInt(result.ANOFABRICACAO);
            veicle.anomodelo = parseInt(result.ANOMODELO);
            veicle.cor = result.COR;

            veicle.chassi = result.CHASSI;
            veicle.renavam = result.RENAVAM;
            // veicle.combustivel = result.COMBUSTIVEL;
            veicle.combustivel = '';
            veicle.tipodoveiculo = result.TIPOVEICULO;
            veicle.tipodemontagem = result.TIPOMONTAGEM;
            veicle.situacaodoveiculo = result.SITUACAOVEICULO.trim();
            veicle.situacaodochassi = result.SITUACAOCHASSI.trim();
            veicle.potencia = result.POTENCIA;
            veicle.cilindradas = result.CILINDRADA;
            veicle.especiedoveiculo = result.ESPECIE;
            veicle.tipodecarroceria = result.TIPOCARROCERIA;
            veicle.procedencia = result.PROCEDENCIA.trim().substr(0,1);
            veicle.municipio = result.MUNICIPIO;
            veicle.uf = result.UF;
            veicle.docproprietarioatual = result.PROPRIETARIO;
            // veicle.nomeproprietarioatual = '';
            veicle.qtdeixos = result.EIXOS;
            // veicle.datashowroom = '';
            // veicle.status = '';
            veicle.valorvenda = 0;
            veicle.margem = 1;
            // veicle.showroom = 0;

            // Valores obrigatórios não retornados da API e não presentes no APP

            loadedVeicleData = true;
          } else error = "Placa não encontrada na base de dados";

          return {
            ...state,
            loadingVeicleData: false,
            loadedVeicleData: loadedVeicleData,
            data: action.payload.data,
            veicle: veicle,
            error: error
          }

        case "GET_VEICLE_DATA_BY_CAR_PLATE_FAIL":
          return {
            ...state,
            loadingVeicleData: false,
            error: "Erro ao buscar dados do veículo"
          }

        /////////////////////////////////////////////////////

        case "RESET_VEICLE_DATA":
          return {
            ...state,
            veicle: initialState.veicle,
            data: [],
            loadingVeicleData: false,
            loadedVeicleData: false,
            loadingPictureLabels: false,
            loadedPictureLabels: false,
            insertingVeicle: false,
            error: false
          }

        case "SET_VEICLE_CAR_PLATE":
          return {
            ...state,
            veicle: {
              ...state.veicle,
              placa: action.placa
            }
          }

        case "SET_VEICLE_VALOR_VENDA":
          return {
            ...state,
            veicle: {
              ...state.veicle,
              valorvenda: action.valorvenda
            }
          }

        ///////////////////////////////////////////////////////////////

        case "CREATE_VEICLE":
          return {
            ...state,
            insertingVeicle: true,
            error: false
          }

        case "CREATE_VEICLE_SUCCESS":
          // veicle = action.payload.data.veiculo;
          //
          // console.log(action.payload);

          // let imagens = [];
          //
          // veicle.files.files.forEach(function(img){
          //   let imagem = {
          //     "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
          //     "label": img.posicao || ""
          //   }
          //
          //   imagens.push(imagem);
          // });
          //
          // veicle.extra.files.forEach(function(img){
          //   let imagem = {
          //     "imagem": Environment.apiUrl + "/uploads/Veiculo/" + img.arquivo,
          //     "label": img.posicao || ""
          //   }
          //
          //   imagens.push(imagem);
          // });
          //
          // veicle.imagens = imagens;
          // veicle.imagensCount = veicle.imagens.length;

          return {
            ...state,
            insertingVeicle: false,
            error: false
          }

        case "CREATE_VEICLE_FAIL":
          return {
            ...state,
            insertingVeicle: false,
            error: "Erro ao criar veículo"
          }

        ///////////////////////////////////////////////////////////////

        case "GET_PICTURE_LABELS":
          return {
            ...state,
            loadingPictureLabels: true,
            loadedPictureLabels: false,
            error: false
          }

        case "GET_PICTURE_LABELS_SUCCESS":
          labels = action.payload.data.arquivos;
          final = [];

          labels.forEach(function(label){
            final.push({
              imagem: false,
              label: label.label,
              type: "predefined",
              status: "empty"
            })
          });

          final.push({
            imagem: false,
            label: "Extra",
            type: "extra",
            status: "empty"
          });

          return {
            ...state,
            veicle: {
              ...state.veicle,
              imagens: final,
              imagensCount: final.length
            },
            loadingPictureLabels: false,
            loadedPictureLabels: true,
            error: false
          }

        case "GET_PICTURE_LABELS_FAIL":
          return {
            ...state,
            loadingPictureLabels: false,
            loadedPictureLabels: false,
            error: "Erro ao carregar label das fotos"
          }

        default:
          return state;
    }
}
