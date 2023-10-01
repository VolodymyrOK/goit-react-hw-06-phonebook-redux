export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const changeFilter = newFilter => {
  return {
    type: 'filter',
    payload: newFilter,
  };
};
