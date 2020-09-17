//React Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loading from "./Components/Reusable/Loading";

// Redux Imports
import { Provider } from "react-redux";
import { configureStore } from "./store";

//Redux Persist Imports
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
