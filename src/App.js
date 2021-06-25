import React from 'react';
import { Route } from 'react-router';
import { Footer } from './components';
import { Home, Cart, ItemCard } from './pages';

function App() {

  return (
    <div className='wrapper'>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/itemCard' component={ItemCard} />
      <Footer />
    </div>
  );
}

export default App;




