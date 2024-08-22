import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookImage from "./images/book.webp";

const books = [
  {
    author: "카네기",
    title: "카네기 인간관계론",
    img: "./images/book.webp",
  },
  {
    author: "탈무드",
    title: "탈무드 Talmud",
    img: "https://m.media-amazon.com/images/I/31QC9mAKVnL._AC_UL582_FMwebp_QL65_.jpg",
  },
];

const names = ["김싸피", "이싸피", "박싸피"];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});
console.log(newNames);
const BookList = () => {
  return <section className="booklist">{newNames}</section>;
};

const Book = (props) => {
  console.log(props);
  const { img, author, title, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {children}
      <h4>{author}</h4>
    </article>
  );
};

// 아래와 같이 하는 것도 가능
// const Book = ({ img, author, title }) => {
//   // props는 출력할 수 없으나 img를 출력하면 객체의 값이 나옴
//   // console.log(props);
// //   console.log(img);
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// export default Greeting;
