
import './App.css';
import * as React from 'react';
import Header from './components/header/Header';

import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Inventroy from './components/Inventrory/Inventroy';
import NoPage from './components/NoPage/NoPage';
import ProductDetails from './components/ProductDeatails/ProductDetails';





function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Shop />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Inventroy" element={<Inventroy />} />
            <Route path="/product/:productkey" element={<ProductDetails />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
