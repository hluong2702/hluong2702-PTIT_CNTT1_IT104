import type { Product } from "../../types";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const SET_LOADING = "SET_LOADING";


interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number;
}

interface UpdateQuantityAction {
  type: typeof UPDATE_QUANTITY;
  payload: {
    id: number;
    quantity: number;
  };
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateQuantityAction
  | ClearCartAction
  | SetLoadingAction;

export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (id: number, quantity: number): UpdateQuantityAction => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART,
});

export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload: loading,
});
