import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home.js';
import ModalMovie from './components/modalmovie/ModalMovie.js';
import Navbar from './components/navbar/Navbar.js';
import FavList from './components/favlist/FavList.js';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favlist" element={<FavList />} />
          <Route path="/modal" element={
              <ModalMovie />
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;