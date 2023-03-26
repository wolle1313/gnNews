import axiosInstance from "./axiosInstance";
import { SourcesResponse } from "types/api/SourcesResponse";


const sourcesApi = {
    getSources: () => axiosInstance.get<SourcesResponse>(`top-headlines/sources`)
}

export default sourcesApi