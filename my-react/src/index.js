import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookImage from "./images/book.webp";

const title = "카네기 인간관계론";
const author = "abcde";
// const img = "./images/book.webp";
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={bookImage} alt={title} />
      <h2>{title} </h2>
      <h4>{author.toUpperCase()}</h4>
      {/* {}안에는 값을 반환하는 식만 전달가능 
      따라서 6+6 은 되지만 let x = 6 이런건 안됨*/}
    </article>
  );
};

// React.createElement로 만들기 ... 복잡
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// export default Greeting;
