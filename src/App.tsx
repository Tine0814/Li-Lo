import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import NavBarFooterLayout from "./components/Layout/NavBarFooterLayout";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import RegistrationCompletePage from "./pages/RegistrationCompletePage/RegistrationCompletePage";

function App() {
  const [loading, setLoading] = useState(false);
  const [tokenRoute, setTokenRoute] = useState(false);

  useEffect(() => {
    setLoading(true);

    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Check if the route contains '/verify/'
    const isVerifyRoute = window.location.pathname.includes("/verify/");
    setTokenRoute(isVerifyRoute);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {loading && !tokenRoute ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <NavBarFooterLayout>
                  <LandingPage />
                </NavBarFooterLayout>
              }
            />
            <Route path="/Register" element={<RegistrationPage />} />
            <Route
              path="/verify/:token"
              element={<RegistrationCompletePage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
