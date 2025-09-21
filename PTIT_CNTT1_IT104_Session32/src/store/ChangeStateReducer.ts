type ActionType = {
  type: string;
  payload: number;
};

export const ChangeStateReducer = (
  state = "Rikkei Academy",
  action: ActionType
) => {
  switch (action.type) {
    case "changeState":
      return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
    default:
      return state;
  }
};
