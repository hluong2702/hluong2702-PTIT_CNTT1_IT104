type ActionType = {
  type: string;
  payload: number;
};

export const counterReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "random":
      return Math.ceil(Math.random() * 100);
    default:
      break;
  }
};
