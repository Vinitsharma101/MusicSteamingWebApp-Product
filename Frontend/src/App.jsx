import './App.css';
import Home from './screens/Home';
import Intro from './Components/Intropage/Intro';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PLaylistByID from './Components/playlists.ids/PLaylistByID';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/playlists/:id" element={<PLaylistByID />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
