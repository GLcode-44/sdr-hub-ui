import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import AddPhoneScript from "./components/AddPhoneScript";
import PhoneScriptList from './components/PhoneScriptList';
import UpdatePhoneScript from './components/UpdatePhoneScript';


function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<PhoneScriptList />}></Route>
      <Route index element={<PhoneScriptList />}></Route>
      <Route path="/phoneScriptList" element={<PhoneScriptList />}></Route>
      <Route path="/addPhoneScript" element={<AddPhoneScript />}></Route>
      <Route path="/editPhoneScript/:id" element={<UpdatePhoneScript />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
