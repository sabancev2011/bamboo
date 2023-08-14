import React from 'react';
import PropTypes from 'prop-types';

function Filter({ cat, onClickCat, activeCat }) {

    return (
        <div className="filter">
            <ul>
                {cat && cat.map((name, index) =>
                    <li onClick={() => onClickCat(index)} className={activeCat === index ? 'active' : ''} key={`${name}_${index}`}>{name}</li>)}
            </ul>
        </div>
    )
}

Filter.propTypes = {
    cat: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCat: PropTypes.func.isRequired,
    activeCat: PropTypes.number.isRequired
}

Filter.defaultProps = {
    cat: [],
    activeCat: 0,
};


export default Filter




