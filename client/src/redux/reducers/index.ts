import { Action, Store } from "../../types";
import { INCREMENT } from "../actions";

const initialState: Store = {
  counter: 0,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case INCREMENT:
      return { counter: state.counter + 1 };

    default:
      return state;
  }
};
