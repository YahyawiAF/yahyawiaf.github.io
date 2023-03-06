import React from "react";
import { Routes, Route } from "react-router-dom";
import { withFallback } from "./withFallback";

const MainLayout = withFallback(
  React.lazy(() => import("~/layouts/MainLayout"))
);

const HomePage = withFallback(React.lazy(() => import("~/pages/LandingPage")));
const Realisation = withFallback(
  React.lazy(() => import("~/pages/Realisation"))
);

const RenderRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Realisation" element={<Realisation />} />
      </Route>
    </Routes>
  );
};

export default RenderRouter;
