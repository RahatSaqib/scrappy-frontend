import axios from "axios";

const config: { local: string; production: string } = {
  'local': "http://localhost:3001/api/v1",
  'production': "http://3.219.85.76:3001/api/v1"
}
export const mode = process.env.REACT_APP_MODE || config.local // 'local' or 'production

const axiosConfig = {
  baseURL: mode == config.local ? config.local : config.production
}


const apiClient = axios.create(axiosConfig);

const callApi = async (endPonint: string, data: any, config?: any) => {
  if (data.type === 'get') {
    let response = await apiClient.get(endPonint)
    return response.data
  }
  let response = await apiClient.post(endPonint, data, config)
  return response.data
};


export default callApi;