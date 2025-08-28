import React, { useReducer, useState } from 'react';
import './style.css';

const initialState = {
  loading: false,
  success: false,
  error: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, loading: true, success: false, error: false };
    case 'SUCCESS':
      return { ...state, loading: false, success: true, error: false };
    case 'ERROR':
      return { ...state, loading: false, success: false, error: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      dispatch({ type: 'ERROR' });
      return;
    }

    dispatch({ type: 'SUBMIT' });

    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        dispatch({ type: 'SUCCESS' });
        alert('Đăng nhập thành công!');
      } else {
        dispatch({ type: 'ERROR' });
      }
      setTimeout(() => dispatch({ type: 'RESET' }), 2000);
    }, 6000);
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên người dùng</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên..."
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            required
          />
        </div>
        <button type="submit" disabled={state.loading}>
          {state.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
        {state.error && <p className="error">Đăng nhập thất bại. Vui lòng kiểm tra lại!</p>}
        {state.success && <p className="success">Đăng nhập thành công!</p>}
      </form>
    </div>
  );
}