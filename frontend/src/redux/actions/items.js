
import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchItems = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`https://${process.env.REACT_APP_API_URL}/items?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=asc`).then(({ data }) => {
    dispatch(setItems(data));
  });
};

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});

export const setActiveColor = (name, id) => ({
  type: 'SET_ACTIVE_COLOR',
  payload: {
    name: name,
    id: id
  }
});

export const setActiveSize = (name, id) => ({
  type: 'SET_ACTIVE_SIZE',
  payload: {
    name: name,
    id: id
  }
});

