import React, { useEffect, useRef, useState } from "react";

const Modal = () => {
  const [btn, setButton] = useState(false);
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleChangeOpenModal = () => {
    setButton(true);
  };

  const handleChangeCloseModal = () => {
    setButton(false);
  };

  useEffect(() => {
    if (btn && myRef.current) {
      myRef.current.focus();
    }
  }, [btn]);

  return (
    <div>
      <div>
        <h3>Ứng dụng React với modal và Focus Input</h3>
        <button
          onClick={handleChangeOpenModal}>Mở modal
        </button>
      </div>
      {btn && (
        <div>
          <h3>Đăng nhập</h3>
          <input
            type="text"
            ref={myRef}
            placeholder="Nhập tên người dùng"
          />
          <button
            onClick={handleChangeCloseModal}>Đóng</button>
        </div>
      )}
    </div>
  );
};

export default Modal;