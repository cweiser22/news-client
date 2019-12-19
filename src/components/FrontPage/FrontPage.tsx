import React, { useEffect, useState } from "react";
import "./FrontPage.css";
import { Article } from "../../types";
import { articlesAPI } from "../../api/articlesAPI";
import { ListLayout } from "../ListLayout/ListLayout";

export const FrontPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    articlesAPI.fetchTopHeadlines().then(json => {
      if (json.status != "ok") {
        setPending(false);
        return setError("Failed to fetch articles.");
      }
      setPending(false);
      return setArticles(json.articles);
    });
  });
  return (
    <main>
      <ListLayout articles={articles} error={error} pending={pending} />
    </main>
  );
};
