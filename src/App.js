import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import UserProfile from "./components/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
