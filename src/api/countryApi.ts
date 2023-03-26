import axiosInstance from "./axiosInstance";
import { CountryNewsResponse } from "types/api/CountryNewsResponse";


const countryApi = {
    getCountryNews: (country: string) => axiosInstance.get<CountryNewsResponse>(`top-headlines?country=${country}`)
}

export default countryApi