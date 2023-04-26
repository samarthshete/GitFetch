import {Dashboard, Error} from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import { useAppContext } from "./context/appContext";

function App() {

  const {user} = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
