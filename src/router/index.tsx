import { Route, Routes } from "@solidjs/router";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Routes>
  )
}

export default AppRoutes;
