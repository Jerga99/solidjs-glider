
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";

import "./index.css";
import AuthProvider from "./context/auth";

render(
  () => 
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("root")!
)
