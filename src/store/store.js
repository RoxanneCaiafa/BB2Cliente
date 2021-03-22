import{createStore, combineReducers, applyMiddleware,compose} from 'redux';
import { itemsReducer } from '../reducers/itemsReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk'

/*
estados inicializados, middleware*/
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    itemsR :itemsReducer, ui :uiReducer,//{uiReducer:{msgError:null }},
});

export const store = createStore(reducers,{itemsReducer:{items:[], detail:{providers:[], reducePrice:[] }}}, {ui:{}},
    composeEnhancers(
        applyMiddleware(thunk) // para trabajar acciones asíncronas
    )
);
export default store;