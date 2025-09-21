export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  products: Product[];
  cart: CartItem[];
  loading: boolean;
}
