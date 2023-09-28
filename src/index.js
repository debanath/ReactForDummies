import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Cassidy Hutchinson",
    title: "Enough",
    img: "https://images-na.ssl-images-amazon.com/images/I/713UttE-zRL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "Rick Riordan",
    title: "Percy Jackson and the Olympians",
    img: "https://images-na.ssl-images-amazon.com/images/I/81EwXBeJX+L._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];
const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        // const { img, title, author, id } = book;
        // return <Book img={img} title={title} author={author} key={id} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  // const handleFormInput = (e) => {
  //   console.log(e);
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   console.log("Handle Form input");
  // };
  // const handleButtonInput = () => {
  //   alert("Button unga bunga");
  // };
  // const handleFormSubmission = (e) => {
  //   e.preventDefault(); // react by default redirects to some other page onSubmit to prevent this we can use preventDefault() function.
  //   console.log("Form submitted");
  // };
  return (
    <section>
      <form /*onSubmit={handleFormSubmission}*/>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => alert("Button clicked")} type="button">
        Click me
      </button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
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
