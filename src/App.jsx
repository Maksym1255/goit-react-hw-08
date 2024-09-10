import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ContactsPage from "./Pages/ContactsPage";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <>
      <header>
        <Layout />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
