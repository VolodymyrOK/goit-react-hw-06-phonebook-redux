const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  console.log('filterReducer', action);
  switch (action.type) {
    case 'filter': {
      return {
        ...state,
        filter: action.payload,
      };
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
