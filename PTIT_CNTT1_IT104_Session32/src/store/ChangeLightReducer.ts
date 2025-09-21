type ActionType = {
  type: string;
  payload: number;
};

export const ChangeLightReducer = (state = "light", action: ActionType) => {
  switch (action.type) {
    case "changeLight":
      return state === "light" ? "black" : "light";
    default:
      return state;
  }
};
