import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// import GuestLayout from "@/pages/guest/layout";

import HomePage from "@/pages/guest/home/index";
import LoginPage from "@/pages/auth/login";
;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

      </Route>
    </Routes>
  </BrowserRouter>
);