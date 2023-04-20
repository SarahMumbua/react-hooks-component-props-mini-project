import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const logo = blogData.image
const title = blogData.about
const articles = blogData.posts

function App() {
  return (
    <div className="App">
      <h1>{blogData.name}</h1>
      <About logo={logo} about={title} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
