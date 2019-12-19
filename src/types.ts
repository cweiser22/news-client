//this is an article from the news API
export interface Article {
  author: string;
  title: string;
  description: string;
  source: Source;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface TopHeadlinesResponse {
  articles: Article[];
  totalResults: number;
  status: string;
}

export interface NewsState {
  pending: boolean;
  error: string;
  articles: Article[];
}

export interface AppState {
  news: NewsState;
}
