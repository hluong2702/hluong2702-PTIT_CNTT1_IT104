import React from "react";
import { Layout, Typography, Row, Col, message } from "antd";
import { Provider } from "react-redux";

import store from "./redux/store";
import { addToCart, updateQuantity, removeFromCart, clearCart } from "./redux/actions/cartActions";
import { formatCurrency } from "./utils/formatters";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const cartState = store.getState().cart;
  const [state, setState] = React.useState(cartState);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().cart);
    });
    return unsubscribe;
  }, []);

  const handleAddToCart = (product: any) => {
    store.dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    store.dispatch(updateQuantity(id, quantity));
  };

  const handleRemoveFromCart = (id: number) => {
    store.dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    store.dispatch(clearCart());
    message.success("Đã xóa tất cả sản phẩm khỏi giỏ hàng!");
  };

  const handleCheckout = () => {
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message.success({
      content: (
        <div>
          <h3>🎉 Đặt hàng thành công!</h3>
          <p>
            Tổng tiền: <strong>{formatCurrency(total)}</strong>
          </p>
          <small>Cảm ơn bạn đã mua hàng!</small>
        </div>
      ),
      duration: 4,
    });
    store.dispatch(clearCart());
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Title level={2} className="text-white m-0 py-4 flex items-center" style={{ color: "white" }}>
            🛒 <span className="ml-3">Shopping Cart</span>
          </Title>
        </div>
      </Header>

      <Content className="max-w-7xl mx-auto p-6 w-full">
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={16}>
            <ProductList products={state.products} onAddToCart={handleAddToCart} />
          </Col>
          <Col xs={24} lg={8}>
            <Cart
              cart={state.cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
              onClearCart={handleClearCart}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default function ShoppingCartApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
