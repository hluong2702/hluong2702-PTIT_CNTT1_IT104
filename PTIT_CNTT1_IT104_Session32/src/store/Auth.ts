type ActionType = {
  type: string;
  payload?: User;
};

type User = {
  email: string;
  password: string;
};

const initUser: User = {
  email: "",
  password: "",
};

export const AuthReducer = (state = initUser, action: ActionType) => {
  switch (action.type) {
    case "register":
      return { ...state, ...action.payload };
    case "login":
      return { ...state, ...action.payload };
    default:
      break;
  }
  return state;
};
