import { Constants } from 'expo'

const ENV = {
  dev: {
    // apiUrl: 'http;//192.168.0.8:8001',
    // apiUrl: 'http://192.168.0.7:8001',
    // apiUrl: 'http://10.170.7.97:8001'
    // apiUrl: 'http://apigestao.bitnary.com.br:3000'
    // apiUrl: 'http://api.gestaodeconcessionarias.com.br'
    apiUrl: 'http://138.68.20.42'
    // apiUrl: 'http://apigestao.bitnary.com.br',
  },
  staging: {
    apiUrl: 'http://192.168.0.7:8001'
  },
  prod: {
    apiUrl: 'http://192.168.0.7:8001'
  }
}

function Environment(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('staging') !== -1) return ENV.staging;
  if (env.indexOf('prod') !== -1) return ENV.prod;

  return ENV.DEV;
}

// export default Environment(Constants.manifest.releaseChannel)
export default Environment('dev');
