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
      >
        <p>
          Ea in consequat ipsum magna eiusmod exercitation eiusmod enim cillum.
          In nostrud incididunt tempor dolore et voluptate aute esse sunt.
          Tempor ullamco reprehenderit aute aute deserunt minim esse eu proident
          aliqua. Eiusmod eu officia id eiusmod nulla ea et velit. Sit amet ad
          ullamco nostrud id dolore aliquip nulla est tempor in non esse.
          Laborum sunt laboris voluptate sunt consectetur esse ex quis consequat
          nulla occaecat commodo magna.
        </p>
        <button>Click me!</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, author, title, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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
