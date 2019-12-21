import { TopHeadlinesResponse } from "../types";
import { API_KEY } from "../apiKey";

const newsAPIKey = API_KEY;
const apiUrl = "https://newsapi.org/v2/";

//fetches all top headlines
const fetchTopHeadlines = async (
  page: number
): Promise<TopHeadlinesResponse> => {
  let res = await fetch(
    apiUrl +
      "/top-headlines" +
      "?country=us&" +
      "apikey=" +
      newsAPIKey +
      "&page=" +
      page
  );
  return await res.json();
};

//fetches articles from one category
const fetchArticlesByCategory = async (
  category: string,
  page: number,
  pageSize: number
): Promise<TopHeadlinesResponse> => {
  let response = await fetch(
    apiUrl +
      "top-headlines?apiKey=" +
      newsAPIKey +
      "&country=us" +
      "&category=" +
      category +
      "&page=" +
      page +
      "&pageSize=" +
      pageSize
  );
  return await response.json();
};

//exports api calls as an object
export const articlesAPI = { fetchTopHeadlines, fetchArticlesByCategory };
