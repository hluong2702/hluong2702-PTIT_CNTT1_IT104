// import { userReducer } from "./UserReducer";
// import { counterReducer } from "./CounterReducer";
import { createStore } from "redux";
import { AuthReducer } from "./Auth";
// import { ChangeStateReducer } from "./ChangeStateReducer";
// import { ChangeLightReducer } from "./ChangeLightReducer";

// const store = createStore(userReducer);
// const store = createStore(counterReducer);
// const store = createStore(ChangeStateReducer);
// const store = createStore(ChangeLightReducer);
const store = createStore(AuthReducer);
export default store;
