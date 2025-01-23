import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
      

        </Route>
      </Routes>
    </BrowserRouter>
  );
}