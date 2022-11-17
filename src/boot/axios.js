 import { ApiManage } from './ApiManage.js'


import axios from 'axios'
 

// Vue.prototype.$axios = axios
// ^ ^ ^ this will allow you to use this.$axios
//       so you won't necessarily have to import axios in each vue file

const api = axios.create({ baseURL:new ApiManage().baseUrl })
// Vue.prototype.$api = api
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

// Response interceptor for API calls
 
api.interceptors.response.use(
  (response) => {
    return response;
  },
   
);
 
export { axios, api }
