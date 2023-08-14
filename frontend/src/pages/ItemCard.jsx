import React from 'react';
import { Header, Button, CardItemLoaded } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCardColor, setCardSize } from '../redux/actions/itemCard';
import { minusCartItem, addItemToCart } from '../redux/actions/cart'
import { fetchCardItem } from '../redux/actions/itemCard';
import classNames from 'classnames';

function ItemCard() {
  const dispatch = useDispatch();
  const onClickMinusItem = () => {
    dispatch(minusCartItem(id))
  }
  const onClickAddItem = () => {
    const addItem = {
      id: item[0].id,
      name: item[0].name,
      image: item[0].imageUrl,
      color: activeColor,
      size: activeSize,
      price: item[0].price
    }
    dispatch(addItemToCart(addItem))
  }
  const { id, item, isLoaded, activeColor, activeSize } = useSelector(({ itemCard }) => itemCard);
  const cartItems = useSelector(({ cart }) => cart.items);
  React.useEffect(() => {
    id !== false ? dispatch(fetchCardItem(id)) : <CardItemLoaded />
  }, [id, dispatch]);

  return (
    <section className="productCard">
      <Header />
      <div className="container">
        {isLoaded ?
          <div className="product">
            <img className="product__img" src={item[0].imageUrl} alt={item[0].name} />
            <div className="product__content">
              <h1>{item[0].name}</h1>
              <span className="product__price">${item[0].price}</span>
              <p>Versatile elegance for dining room, office or living room. This seating solution offers great
                appeal.
                Bamboo chairs combine premium quality materials with unique high-style design, with the advanced
                product engineering and packaging reinforcement, each product is designed, manufactured and
                packaged
                with shipping in mind.</p>
              <div className="item__selector card">
                <div className="item__inner card">
                  <p>color:</p>
                  <ul>
                    {item[0].color.map((name, index) => <li onClick={() => dispatch(setCardColor(name))} key={`${name}_${index}`} className={classNames('color', {
                      'active': name === activeColor,
                      'color-1': name === 'brown',
                      'color-2': name === 'dark grey',
                      'color-3': name === 'light grey'
                    })} />)}
                  </ul>
                </div>
                <div className="item__inner card">
                  <p>size:</p>
                  <ul>
                    {item[0].sizes.map((name, index) => <li onClick={() => dispatch(setCardSize(name))} key={`${name}_${index}`} className={classNames('size', {
                      'active': name === activeSize,
                    })}>{name}</li>)}
                  </ul>
                </div>
                <div className="item__inner qty">
                  <span>QTY</span>
                  <div className="item__qty card">
                    {cartItems[id] ? <div className="item__qtyBtn card" onClick={onClickMinusItem}>-</div>
                      : <div className="item__qtyBtn card">-</div>}
                    {cartItems[id] ? <div className="item__qtyBtn card">{cartItems[id].length}</div> : <div className="item__qtyBtn card"></div>}
                    <div className="item__qtyBtn card" onClick={onClickAddItem}>+</div>
                  </div>
                  <Button onClick={onClickAddItem} card>ADD TO CARD</Button>
                </div>
              </div>
            </div>
          </div>
          : <div className="product"><CardItemLoaded /></div>
        }
      </div>
    </section>
  )
}

export default ItemCard
