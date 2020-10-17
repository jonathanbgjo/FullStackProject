import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
    entities,
    session: sessionReducer,
    // ui,
    errors,
});

export default rootReducer;
