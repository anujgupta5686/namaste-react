{
  /* <div id="parent">
    <div id="child">
        <h1>I'm H1 tag</h1>
        <h1>I'm H1 tag</h1>
    </div>
</div> */
}
import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag 🚀"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello Duniya!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
