import { Routes, Route } from 'react-router-dom';
import Business from './Component/Business';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Review from './Component/Review';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />}>
          <Route index element={<Business />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
