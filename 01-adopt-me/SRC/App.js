import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lunass",
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
