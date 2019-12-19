import { TopHeadlinesResponse } from "../types";
import { API_KEY } from "../apiKey";

const newsAPIKey = API_KEY;
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
