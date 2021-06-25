import axios from 'axios';

export const cardLoaded = (payload) => ({
  type: 'CARD_LOADED',
  payload,
});

export const fetchCardItem = (id) => (dispatch) => {
  dispatch(cardLoaded(false));
  axios.get(`/items?${`id=${id}`}`).then(({ data }) => {
    dispatch(setCardItem(data));
  });
};

export const setCardItem = (item) => ({
    type: 'SET_CARD_ITEM',
    payload: item,
});

export const linkItemCard = (id) => ({
    type: 'LINK_ITEM_CARD',
    payload: id,
});

export const setCardColor = (name) => ({
  type: 'SET_CARD_COLOR',
  payload: name
});

export const setCardSize = (name) => ({
  type: 'SET_CARD_SIZE',
  payload: name
});
