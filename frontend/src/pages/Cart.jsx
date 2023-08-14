import React from 'react';
import { Header, Button, CartItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';
import { Link } from 'react-router-dom';

function Cart() {

    const { items, totalPrice, totalCount, itemsPrice } = useSelector(({ cart }) => cart);
    const addedItems = Object.keys(items).map((key) => {
        return items[key][0];
    });
    const dispath = useDispatch();
    const onRemoveCartItem = (id) => dispath(removeCartItem(id));
    const onPlusCartItem = (id) => dispath(plusCartItem(id));
    const onMinusCartItem = (id) => dispath(minusCartItem(id));
    const onClearCart = () => dispath(clearCart());
    
    return (
        <section className="cart">
            <Header />
            <div className="container">
                <div className="cart__wrapper">
                    <div className="cart__header">
                        <div className="cart__icon">
                            <img src="img/cartBlack.png" alt="cart" />
                            <span className="cart__iconText">Cart</span>
                        </div>
                        <div className="cart__clearBtn">
                            <img src="img/basketWhite.png" alt="clear cart" />
                            <button onClick={onClearCart} className="cart__clearText">clear cart</button>
                        </div>
                    </div>
                    {addedItems.map((obj) => (
                        <CartItem key={obj.id} 
                        id={obj.id} 
                        name={obj.name} 
                        image={obj.image} 
                        size={obj.size} 
                        color={obj.color} 
                        itemCount={items[obj.id].length} 
                        itemPrice={itemsPrice[obj.id]} 
                        RemoveCartItem={onRemoveCartItem} 
                        onMinus={onMinusCartItem}
                        onPlus={onPlusCartItem}/>
                    ))}
                    <div className="cart__total">
                        <div className="cart__totalItems">
                            <div>{totalCount}</div>
                            <p>item(s)</p>
                        </div>
                        <div className="cart__totalChash">
                            <p>Total:</p>
                            <div>${totalPrice}</div>
                        </div>
                    </div>
                    <Link to='/'>
                    <Button pay >BACK</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cart;
