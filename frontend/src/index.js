import { render } from "react-dom";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));