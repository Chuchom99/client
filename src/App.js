import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import News from './pages/News';
import Coin from './pages/Coin';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/coin/:coinsId" element={<Coin />} />
          {/* <Route path=":coinsId" element={<Coin />} /> */}
        </Routes>
    </BrowserRouter>

  );
}

export default App;
