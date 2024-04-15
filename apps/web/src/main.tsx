import React from "react";
import ReactDOM from "react-dom/client";

export function App() {
  return <h1>Hello from App</h1>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
