import { createStore } from "redux";
import produce from "immer";

export const initialState = {
  number: 0,
};

export const addNumber = (number) => ({
  type: "ADD_NUM",
  payload: number,
});

export const multiplyNumber = (number) => ({
  type: "MULTIPLY",
  payload: number,
});
export const restart = () => ({
  type: "RESTART",
});
const calculatorReducer = (state, action) => {
  if (action.type === "ADD_NUM") {
    return produce(state, (draft) => {
      draft.number += action.payload;
    });
  }
  if (action.type === "MULTIPLY") {
    return produce(state, (draft) => {
      draft.number *= action.payload;
    });
  }
  if (action.type == "RESTART") {
    return produce(state, (dratf) => {
      dratf.number = 0;
    });
  }
  return state;
};

export const store = createStore(calculatorReducer, initialState);
