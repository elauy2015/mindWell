// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import axios from "axios";
axios.defaults.baseURL = "https://mindwellbackend.onrender.com/api/v1/";
axios.defaults.withCredentials = true;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Toaster position="bottom-center" />
        {children}
      </NextUIProvider>
    </AuthProvider>
  );
}
