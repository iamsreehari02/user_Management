import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Password from "./components/Password";
import OTPverify from './components/OTPverify'
import Username from "./components/Username";

function App() {
  return (
    <div className="font-Poppins">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Username/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Reset' element={<Reset/>}/>
        <Route path='/Recovery' element={<Recovery/>}/>
        <Route path='/Password' element={<Password/>}/>
        <Route path='/OTPverify' element={<OTPverify/>}/>

      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
