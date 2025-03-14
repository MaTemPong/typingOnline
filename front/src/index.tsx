import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from "./components/ui/provider";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);