import {Dashboard, Error} from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useAppContext } from "./context/appContext";

function App() {

  const {user} = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element ={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
