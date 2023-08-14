import React from 'react';
import PropTypes from 'prop-types';
import useComponentVisible from '../hooks/useComponentVisible';

function Sort({ sortCat, activeSort, onClickSort }) {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <div ref={ref} className="sort">
            <div className="sort__header" onClick={() => setIsComponentVisible(!isComponentVisible)}>Sort by
                <span className={isComponentVisible ? 'sort__current active' : 'sort__current'}>{activeSort.name}</span>
                <img className={isComponentVisible ? 'active' : ''} src="img/down-arrow.png" alt="arrow" />
            </div>
            {isComponentVisible && <div className='sort__popUp'>
                <ul>
                    {sortCat && sortCat.map((obj, index) => <li onClick={() => { onClickSort(obj); setIsComponentVisible(false) }}
                        className={activeSort.type === obj.type ? 'active' : ''} key={`${obj.name}_${index}`}>{obj.name}</li>)}
                </ul>
            </div>}
        </div>
    )
}

Sort.propTypes = {
    sortCat: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSort: PropTypes.object.isRequired,
    onClickSort: PropTypes.func.isRequired
}

Sort.defaultProps = {
    sortCat: [],
};


export default Sort;