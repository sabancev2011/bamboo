import React from 'react';
import PropTypes from 'prop-types';

function Sort({ sortCat, activeSort, onClickSort }) {
    const [popUp, setPopUp] = React.useState(false);
    const sortRef = React.useRef()
    const outSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setPopUp(false);
        }
    };
    React.useEffect(() => {
        document.body.addEventListener('click', outSideClick)
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__header" onClick={() => setPopUp(!popUp)}>Sort by
            <span className={popUp === true ? 'sort__current active' : 'sort__current'}>{activeSort.name}</span>
                <img className={popUp === true ? 'active' : ''} src="img/down-arrow.png" alt="arrow" />
            </div>
            { popUp && <div className='sort__popUp'>
                <ul>
                    {sortCat && sortCat.map((obj, index) => <li onClick={() => {onClickSort(obj); setPopUp(false)}}
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