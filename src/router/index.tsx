import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import HomeScreen from "../screens/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const LoginScreen = lazy(() => import("../screens/Login"));
const RegisterScreen = lazy(() => import("../screens/Register"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={MainLayout}>
        <Route path="" component={HomeScreen} />
      </Route>

      <Route path="/auth" component={AuthLayout}>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Route>

    </Routes>
  )
}

export default AppRoutes;
