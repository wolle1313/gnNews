import { CountrySource } from "./CountrySource";

export interface Article {
    author: string;
    description: string;
    publishedAt: Date;
    source: CountrySource;
    title: string;
    url: string;
    urlToImage: string;
}