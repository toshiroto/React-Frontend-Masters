import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "Jacinto",
      animal: "Dog",
      breed: "Schnousser",
    }),
    React.createElement(Pet, {
      name: "Karlota",
      animal: "Dog",
      breed: "Schnousser",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
