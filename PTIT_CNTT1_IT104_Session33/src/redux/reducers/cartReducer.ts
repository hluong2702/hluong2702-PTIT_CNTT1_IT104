import type { CartState, Product } from "../../types";
import {
  type CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  SET_LOADING,
} from "../actions/cartActions";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Pizza Hải Sản",
    description: "Pizza hảo hạng với đầy đủ topping ngon miệng, phô mai kéo sợi thơm ngon, hải sản tươi",
    price: 250000,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    category: "Italian",
  },
  {
    id: 2,
    name: "Hamburger Bò BBQ",
    description: "Hamburger bò nướng BBQ với rau xanh tươi ngon, khoai tây chiên giòn rụm, sốt đặc biệt",
    price: 180000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    category: "American",
  },
  {
    id: 3,
    name: "Bánh Mì Việt Nam",
    description: "Bánh mì truyền thống Việt Nam với nhân thịt, pate, rau cải, đầy đủ gia vị đặc trưng",
    price: 35000,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=200&fit=crop",
    category: "Vietnamese",
  },
  {
    id: 4,
    name: "Bánh Kem Sinh Nhật",
    description: "Bánh kem tươi ngon, ngọt ngào với kem tươi thơm béo và trái cây tươi, trang trí đẹp mắt",
    price: 320000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    category: "Dessert",
  },
  {
    id: 5,
    name: "Sushi Set Nhật",
    description: "Set sushi cao cấp với cá hồi, cá ngừ tươi ngon, wasabi và gừng ngâm truyền thống",
    price: 450000,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
    category: "Japanese",
  },
  {
    id: 6,
    name: "Phở Bò Đặc Biệt",
    description: "Phở bò truyền thống với nước dùng đậm đà, thịt bò tái và chín, rau thơm đầy đủ",
    price: 65000,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=200&fit=crop",
    category: "Vietnamese",
  },
];

const initialState: CartState = {
  products: initialProducts,
  cart: [],
  loading: false,
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
        };
      }
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
