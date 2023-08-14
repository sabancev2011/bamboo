import React from 'react'
import { Header, Item, Filter, Sort, ItemLoaded } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchItems, setActiveColor, setActiveSize } from '../redux/actions/items';
import { addItemToCart, minusCartItem } from '../redux/actions/cart';
import { linkItemCard } from '../redux/actions/itemCard';

function Home() {
    const { items, isLoaded } = useSelector(({ items }) => items);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const itemsCart = useSelector(({ cart }) => cart.items);
    const dispatch = useDispatch();
    const clickItemCard = (id) => dispatch(linkItemCard(id));
    const clickMinusItem = (id) => dispatch(minusCartItem(id));
    const clickAddItem = (obj) => dispatch(addItemToCart(obj));
    const clickSetColor = (index, id) => dispatch(setActiveColor(index, id));
    const clickSetSize = (index, id) => dispatch(setActiveSize(index, id));
    const clickCat = (index) => dispatch(setCategory(index));
    const clickSort = (type) => dispatch(setSortBy(type));

    const textCategory = () => {
        switch (category) {
            case 0:
                return 'All';
            case 1:
                return 'Sofas';
            case 2:
                return 'Chairs';
            case 3:
                return 'Tables';
            case 4:
                return 'Wardrobes';
            case 5:
                return 'Beds';
            default:
                return 'All';
        }
    }

    React.useEffect(() => {
        dispatch(fetchItems(category, sortBy));
    }, [category, sortBy, dispatch]);

    return (
        <div className='wrapper'>
            <section className="hero">
                <Header />
                <h3 className="hero__intro">INDOORS</h3>
                <h1 className="hero__title">See Bamboo’s New Range Of Indoor Furniture</h1>
                <p className="hero__text">Classic meet modern living,<br />
                    Bamboo has a fantastic range of indoor furniture,
                    perfect for any modern home.</p>
            </section>
            <section className="content">
                <div className="container">
                    <div className="content__topWrapper">
                        <Filter cat={['All', 'Sofas', 'Chairs', 'Tables', 'Wardrobes', 'Beds']}
                            onClickCat={clickCat}
                            activeCat={category} />
                        <Sort activeSort={sortBy} sortCat={[{ name: 'default', type: 'default' }, { name: 'price', type: 'price' }, { name: 'alphabet', type: 'name' }]}
                            onClickSort={clickSort}
                        />
                    </div>
                    <h2 className="filter__title" >{textCategory()}</h2>
                    <div className="content__wrapper">
                        {isLoaded ? items.map((obj) =>
                            <Item
                                addItemsCart={itemsCart[obj.id] && itemsCart[obj.id].length}
                                onClickItemCard={clickItemCard}
                                onClickMinusItem={clickMinusItem}
                                onClickAddItem={clickAddItem}
                                onClickSetColor={clickSetColor}
                                onClickSetSize={clickSetSize}{...obj} key={obj.id} />)
                            : Array(16).fill(0).map((_, index) => <ItemLoaded key={index} 
                            />)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
