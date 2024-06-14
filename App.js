import { Provider } from "react-redux";
import MedBuddyStackNavigation from "./src/navigation/Navigation";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <MedBuddyStackNavigation />
    </Provider>
  );
}
