import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo-spacex.png";

export function App() {
  return (
    <>
      <Image m={1} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}
