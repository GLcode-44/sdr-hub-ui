import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import AddPhoneScript from "./components/AddPhoneScript";
import PhoneScriptList from './components/PhoneScriptList';


function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<PhoneScriptList />}></Route>
      <Route index element={<PhoneScriptList />}></Route>
      <Route path="/PhoneScriptList" element={<PhoneScriptList />}></Route>
      <Route path="/addPhoneScript" element={<AddPhoneScript />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
