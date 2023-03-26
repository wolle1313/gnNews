import { Article } from "types/Article";

export interface CountryNewsResponse {
    status: string;
    articles: Article[];
    totalResults: number
}