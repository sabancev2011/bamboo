import React from 'react';
import { Button } from './';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Item({ id, name, imageUrl, color, sizes, price, onClickAddItem, addItemsCart, onClickMinusItem, onClickItemCard, onClickSetColor, onClickSetSize }) {

  const { activeColor, activeSize } = useSelector(({ items }) => items)

  const addItem = () => {
    const obj = {
      id: id,
      name: name,
      image: imageUrl,
      color: activeColor[id],
      size: activeSize[id],
      price: price
    }
    onClickAddItem(obj)
  }

  const linkItemCard = () => {
    onClickItemCard(id)
  }

  const minusItem = () => {
    onClickMinusItem(id)
  }

  return (
    <div className="item">
      <Link onClick={linkItemCard} to='/itemCard'>
        <img className="item__img" src={imageUrl} alt={name} />
        <div className="item__name">
          <span>${price}</span>
          <p>{name}</p>
        </div>
      </Link>
      <div className="item__selector">
        <div className="item__inner">
          <p>color:</p>
          <ul>
            {color.map((name, index) => <li onClick={() => onClickSetColor(name, id)} key={`${name}_${index}`} className={classNames('color', {
              'active': activeColor[id] === name,
              'color-1': name === 'brown',
              'color-2': name === 'dark grey',
              'color-3': name === 'light grey'
            })}></li>)}
          </ul>
          <p>size:</p>
          <ul>
            {sizes.map((name, index) => <li onClick={() => onClickSetSize(name, id)} key={`${name}_${index}`} className={classNames('size', {
              'active': activeSize[id] === name,
            })}>{name}</li>)}
          </ul>
        </div>
        <div className="item__inner">
          <div className="item__qty">
            {addItemsCart ? <div onClick={minusItem} className="item__qtyBtn">-</div> : <div className="item__qtyBtn">-</div>}
            {addItemsCart && <div className="item__qtyBtn">{addItemsCart}</div>}
            <div onClick={addItem} className="item__qtyBtn">+</div>
          </div>
          <Button onClick={addItem}>ADD TO CARD</Button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
  onClickAddItem: PropTypes.func
}

Item.defaultProps = {
  name: "",
  color: [],
  sizes: [],
  price: '0',
};

export default Item;