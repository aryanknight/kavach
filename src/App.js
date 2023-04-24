import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.users.userInfo);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/"></Navigate>;
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <LoginPage />
        }
      />

    <Route
        exact
        path="/home"
        element={
          <RequireAuth>
            <HomePage/>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
