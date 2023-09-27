import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Cassidy Hutchinson",
  title: "Enough",
  img: "https://images-na.ssl-images-amazon.com/images/I/713UttE-zRL._AC_UL600_SR600,400_.jpg",
};
const secondBook = {
  author: "Rick Riordan",
  title: "Percy Jackson and the Olympians",
  img: "https://images-na.ssl-images-amazon.com/images/I/81EwXBeJX+L._AC_UL600_SR600,400_.jpg",
};
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
