import React from 'react';
import classNames from 'classnames';

function CartItem({ name, size, image, color, itemCount, itemPrice, id, RemoveCartItem, onMinus, onPlus }) {

    const onClickRemoveCartItem = () => RemoveCartItem(id);
    const onClickMinusCartItem = () => onMinus(id);
    const onClickPlusCartItem = () => onPlus(id);

    return (
        <div className="cart__item">
            <div className="cart__itemInner">
                <img width="150px" src={image} alt={name} />
                <div className="cart__props">
                    <h4>{name}</h4>
                    <div className="cart__propsInner">
                        <span>color:</span>
                        <div className={classNames('cart__color', {
                            'color-1': color === 'brown',
                            'color-2': color === 'dark grey',
                            'color-3': color === 'light grey'
                        })} />
                        <span>size:</span>
                        <div className="cart__size">{size}</div>
                    </div>
                </div>
            </div>
            <div className="cart__qty">
                <div className="cart__qtyInner">
                    <button onClick={onClickMinusCartItem} className="cart__qtyBtn">-</button>
                    <div className="cart__qtyBtn">{itemCount}</div>
                    <button onClick={onClickPlusCartItem} className="cart__qtyBtn">+</button>
                </div>
                <div className="cart__price">{itemPrice}</div>
                <button onClick={onClickRemoveCartItem} className="cart__basket">
                    <img src="img/basketBlack.png" alt="basket" />
                </button>
            </div>
        </div>
    )
}

export default CartItem;