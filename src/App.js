import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
