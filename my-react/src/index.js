import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    // 부모 요소 하나만 반환해야함
    <>
      <div className="something">
        <h3> hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h3>부모요소는 하나만 반환해야함</h3>
      <input type="text" name="" id="" />
    </>
  );
}

// React.createElement로 만들기 ... 복잡
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
// export default Greeting;
