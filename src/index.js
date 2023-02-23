import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function Greeting() {
//   return <h2>My Component</h2>;
// }
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title =
    "Young Forever: The Secrets to Living Your Longest, Healthiest Life";
  const author = "Dr. Mark Hyman MD";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81dL13NFc3L._AC_UL900_SR900,600_.jpg"
        alt="Young Forever: The Secrets to Living Your Longest, Healthiest Life"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
