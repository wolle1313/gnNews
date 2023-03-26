import axios, { AxiosResponse } from 'axios'


const axiosBaseInstance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    
})

axiosBaseInstance.defaults.headers.common['Authorization'] = process.env.REACT_APP_KEY
axiosBaseInstance.interceptors.response.use((response) => response.data);

const axiosInstance = {
    get: <T>(url: string, params?: any) => axiosBaseInstance.get<T, T>(url, params),

    post: <T>(url: string, payload?: any) => axiosBaseInstance.post<T, T>(url, payload)
}

export default axiosInstance