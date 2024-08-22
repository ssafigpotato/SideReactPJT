import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    // 부모 요소 하나만 반환해야함
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h2>John doe</h2>;
const Message = () => {
  return <h2>This is my message</h2>;
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

root.render(<Greeting />);
// export default Greeting;
