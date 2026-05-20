import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErorPage from "./pages/eror";
import DasboardPage from "./pages/dasboard";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"; 

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DasboardPage />,
      errorElement: <ErorPage />
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;