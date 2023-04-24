import {Dashboard, Error} from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element ={<Dashboard></Dashboard>}></Route>
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
