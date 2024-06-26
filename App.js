import React from "react";
import MedBuddyStackNavigation from "./src/navigation/Navigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <MedBuddyStackNavigation />
    </Provider>
  );
}
