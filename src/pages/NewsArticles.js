import React from "react";
import { Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import News from "./News";

const NewsArticles = () => {
  const { news } = useAuth();
  return (
    <div>
      <div className="container my-4 p-4">
        <div className="text-center p-4">
          <h5 className="text-primary">Our Blog</h5>
          <h1>Lates News & Articles</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {news?.map((article) => (
            <News article={article} key={article.id}></News>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default NewsArticles;
