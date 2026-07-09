import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErorPage from "./pages/eror";         // ← ini yang di-import
import DasboardPage from "./pages/dasboard";
import BalancePage from "./pages/balance";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"; 
import { useContext } from "react";          // ← HAPUS Children (gak dipake)
import { AuthContext } from "./components/Layout/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DasboardPage />   {/* ← pake nama yang di-import */}
        </RequireAuth>
      ),
      errorElement: <ErorPage />,  // ← pake nama yang di-import
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
  ]);

  // ⚠️ INI YANG KETINGGALAN: return!
  return <RouterProvider router={myRouter} />;
}

export default App;