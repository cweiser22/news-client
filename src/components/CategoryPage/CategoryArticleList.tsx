import React, { useState, useEffect } from "react";
import {
  Grid,
  Pagination,
  Loader,
  Message,
  Header,
  Item,
  PaginationProps
} from "semantic-ui-react";
import { Article } from "../../types";
import { articlesAPI } from "../../api/articlesAPI";
import { ArticleItem } from "../shared/ArticleItem";

interface Props {
  category: string;
}

//this component handles fetching and displaying articles from a specific category
export const CategoryArticleList: React.FC<Props> = (props: Props) => {
  //the page the user is currently looking at
  const [page, setPage] = useState<number>(1);

  //articles fetched from server
  const [articles, setArticles] = useState<Article[]>([]);

  //pending is used to conditionally render a loading spinner
  const [pending, setPending] = useState<boolean>(true);

  //no error displays while errorMessage is falsey
  const [errorMessage, setErrorMessage] = useState<string>("");

  //tells the paginator how many boxes to display
  const [totalPages, setTotalPages] = useState<number>(1);

  //destructure props
  const { category } = props;

  useEffect(() => {
    console.log("page: " + page);
    //wrapper to use async
    async function fetchArticles() {
      try {
        //call the api
        let response = await articlesAPI.fetchArticlesByCategory(
          category,
          page,
          20
        );

        //display error if request didn't go well
        if (response.status != "ok") {
          //hides loader
          setPending(false);

          //displays an error
          setErrorMessage(
            "Something went wrong, we couldn't fetch the articles."
          );
          return;
        }

        //clear old error messages
        setErrorMessage("");

        //update totalPages
        setTotalPages(Math.ceil(response.totalResults / 20));

        //hide loading spinner
        setPending(false);

        //finally, display articles
        setArticles(response.articles);
      } catch (e) {
        setPending(false);
        setErrorMessage(
          "Something went wrong, we couldn't fetch the articles."
        );
      }
    }
    fetchArticles();
  }, [page]);

  //event that handles paginator click
  function handlePageChange(e: React.MouseEvent, data: PaginationProps) {
    const { activePage } = data;

    if (activePage != undefined) {
      //turn into number type
      let page: number = Number(activePage);
      setPage(page);
    }
  }

  const articleListItems = articles.map((a, i) => (
    <ArticleItem article={a} key={i + 1} />
  ));
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Loader active={pending} />
          <Message error={true} hidden={errorMessage == ""}>
            {errorMessage}
          </Message>
          <Header as="h1">{category}</Header>
          <Item.Group divided={true}>{articleListItems}</Item.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
