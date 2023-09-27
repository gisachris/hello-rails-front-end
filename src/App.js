import { Routes, Route } from 'react-router-dom';
import Message from './components/message';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
