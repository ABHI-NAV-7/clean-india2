import {
  BrowserRouter,
  Routes,
  Route     
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Report from "./pages/Report";

import Dashboard from "./pages/Dashboard";

import Leaderboard from "./components/Leaderboard";

import Movement from "./pages/Movement";


function App() {

  return (

    <BrowserRouter>

      <Routes>
<Route

  path="/"

  element={<Home />}

/>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
  path="/report"
  element={<Report />}
/>

<Route

  path="/movement"

  element={<Movement />}

/>

      </Routes>

    </BrowserRouter>

  );
}

  export default App;