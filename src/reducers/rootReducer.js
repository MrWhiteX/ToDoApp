import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "todos",
  storage,
};

const rootReducer = combineReducers({
  content: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
