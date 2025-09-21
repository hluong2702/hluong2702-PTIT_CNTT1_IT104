type User = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};

const initialState: User[] = [
  {
    id: 1,
    userName: "Nguyễn Văn Nam",
    gender: "Nam",
    dateBirth: "20/03/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Văn B",
    gender: "Nữ",
    dateBirth: "21/04/2003",
    address: "Đống Đa, Hà Nội",
  },
];

type ActionType = {
  type: string;
  payload?: unknown;
};

export const userReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "display":
      return state;
    default:
      break;
  }
};
