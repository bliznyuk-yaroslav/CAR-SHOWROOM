import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const VehiclePage = lazy(() => import("./page/VehiclePage/VehiclePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Loader width="100" height="100" color="var(--Rating)" />
                </div>
              }
            >
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/vehicle/:id"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Loader width="100" height="100" color="var(--Rating)" />
                </div>
              }
            >
              <VehiclePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
