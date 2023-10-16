import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hold from './pages/Hold';
import Booking from './pages/Booking';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hold" element={<Hold />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Chat" element={<Chat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
