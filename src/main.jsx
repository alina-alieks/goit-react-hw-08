import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/modern-normalize";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
