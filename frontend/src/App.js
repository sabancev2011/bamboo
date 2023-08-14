import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components';
import { Home, Cart, ItemCard } from './pages';

function App() {

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/itemCard' element={<ItemCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;




