import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import SettingsPage from "./pages/settings.jsx";
import SelectionPage from "./pages/selection.jsx";

const router = createHashRouter([
    { path: "/", element: <HomePage /> },
    { path: "/settings", element: <SettingsPage /> },
    { path: "/selection", element: <SelectionPage /> }
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
