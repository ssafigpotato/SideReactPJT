import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookImage from "./images/book.webp";

const firstBook = {
  author: "카네기",
  title: "카네기 인간관계론",
  img: "./images/book.webp",
};
const secondBook = {
  author: "탈무드",
  title: "탈무드 Talmud",
  img: "https://m.media-amazon.com/images/I/31QC9mAKVnL._AC_UL582_FMwebp_QL65_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// export default Greeting;
