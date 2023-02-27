// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// My Stylesheet
import "./index.css";

// My Book Data
import { books } from "./books.js";

// My Components
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
