import React from 'react';
import classNames from 'classnames';


function Button({ card, pay, children, onClick }) {
    return (
        <button onClick={onClick} className={classNames('button', {
            'btn--card': card,
        },
            {
            'btn--pay': pay,
            },
        )}>
            <img src="img/cartBlackBtn.png" alt="cart" />
            {children}
        </button >
    );
}

export default Button;