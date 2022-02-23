
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Jacinto",
//       animal: "Dog",
//       breed: "Schnousser",
//     }),
//     React.createElement(Pet, {
//       name: "Karlota",
//       animal: "Dog",
//       breed: "Schnousser",
//     }),
//   ]);
// };

const App = () => {
  return (
  <div>
    <h1>Adopt Me</h1>
    <SearchParams />
  </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
