import { Routes, Route } from 'react-router-dom';
import Business from './Component/Business';
import Home from './Component/Home';
import Report from './Component/Report';
import Review from './Component/Review';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Business />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="report/:reportID" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
