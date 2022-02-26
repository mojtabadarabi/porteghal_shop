import Compose from "./Routes/Compose";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LangProvider from "./Providers/LangProvider/LangProvider";
import UserCartProvider from "./Providers/UserCart/UserCart";

const providers = [
  LangProvider,
  UserCartProvider
];

function AppContext() {
  return (
    <BrowserRouter basename="/" >
        <Compose components={providers}>
            <App />
        </Compose>
    </BrowserRouter>
  );
}

export default AppContext;
