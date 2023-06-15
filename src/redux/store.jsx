import { createStore } from "redux";

const initialState = { value: 1 };
const counterReducer = (state = { value: 1 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        value: state.value + 1,
      };
    case "decrement":
      return {
        value: state.value - 1,
      };
    case "incrementTen":
      return {
        value: state.value + action.count,
      };
    case "reset":
      return {
        value: (state.value = 0),
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
