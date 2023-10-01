import { combineReducers, legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
