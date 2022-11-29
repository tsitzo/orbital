import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SettingsContextProvider } from "./src/context/SettingsContext";
import { Routes } from "./src/navigation/Routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <Routes />
      </SettingsContextProvider>
    </QueryClientProvider>
  );
};

export default App;
