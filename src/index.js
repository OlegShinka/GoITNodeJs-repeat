import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";

// import "./index.css";

const root = document.getElementById("root");

const Head = () => {
  return <p> I am head</p>;
};
const Card = () => {
  return data.map((photo) => {
    return (
      <div
        key={photo.id}
        className="card mx-auto my-2"
        style={{ width: "18rem" }}
      >
        <img src={photo.url} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <Head />
          <h5 className="card-title">Card title: {photo.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="go" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};

ReactDOM.createRoot(root).render(<Card />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
