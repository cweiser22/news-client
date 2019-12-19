import { TopHeadlinesResponse } from "../types";

//this is a non-secret API key. It is from https://newsapi.org. it is free tier and is only for rate limiting, and does not grant access to any private resoures.
const newsAPIKey = "5fe72c55278a490684397c2abf237c0b";
const apiUrl = "https://newsapi.org/v2/";

//fetches all top headlines
const fetchTopHeadlines = (): Promise<TopHeadlinesResponse> => {
  return (
    fetch(apiUrl + "top-headlines?apiKey=" + newsAPIKey + "&country=us")
      //turns response body into json
      .then(res => {
        return res.json();
      })
  );
};

//fetches articles from one category
const fetchArticlesByCategory = (
  category: string
): Promise<TopHeadlinesResponse> => {
  return fetch(
    apiUrl +
      "top-headlines?apiKey=" +
      newsAPIKey +
      "&country=us" +
      "&category=" +
      category
  ).then(res => res.json());
};

//exports api calls as an object
export const articlesAPI = { fetchTopHeadlines, fetchArticlesByCategory };
