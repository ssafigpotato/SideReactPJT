import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookImage from "./images/book.webp";

const title = "카네기 인간관계론";
const author = "abcde";
const img = "./images/book.webp";
const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={bookImage} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// export default Greeting;
