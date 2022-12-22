
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";

import "./index.css";
import AuthProvider from "./context/auth";
import UIProvider from "./context/ui";

render(
  () => 
  <Router>
    <UIProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UIProvider>
  </Router>,
  document.getElementById("root")!
)
