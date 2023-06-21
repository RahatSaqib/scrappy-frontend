import axios from "axios";
export const mode = 'production' // 'dev' or 'production

const config = {
  dev: "http://localhost:3001/api/v1",
  production: "http://3.219.85.76:3001/api/v1"
}
const axiosConfig = {
  baseURL: config[mode]
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