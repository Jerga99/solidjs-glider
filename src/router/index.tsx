import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import HomeScreen from "../screens/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProfileScreen from "../screens/Profile";
import GlideDetailScreen from "../screens/GlideDetail";

const LoginScreen = lazy(() => import("../screens/Login"));
const RegisterScreen = lazy(() => import("../screens/Register"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={MainLayout}>
        <Route path="" component={HomeScreen} />
        <Route path="/:uid/glide/:id" component={GlideDetailScreen} />
        <Route path="profile" component={ProfileScreen} />
      </Route>

      <Route path="/auth" component={AuthLayout}>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Route>

    </Routes>
  )
}

export default AppRoutes;
