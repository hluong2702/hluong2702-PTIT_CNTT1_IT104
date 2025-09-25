import {
  ControlOutlined,
  DollarOutlined,
  FileOutlined,
  LeftOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { changeDisplay } from "../slices/reduceDisplay";

export default function Bai5() {
  const mode = useAppSelector((state) => state.reduceDisplay.value);
  const dispatch = useAppDispatch();

  const menuItems = [
    { icon: <ControlOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <LineChartOutlined />, label: "Thống kê" },
    { icon: <FileOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: mode === "reduce" ? "50px" : "160px",
        transition: "width 0.3s ease",
        backgroundColor: "#041433",
        color: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
          <span
            style={{
              opacity: mode === "reduce" ? 0 : 1,
              transition: "opacity 0.3s ease",
              width: mode === "reduce" ? 0 : "auto",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}

      <div
        onClick={() => dispatch(changeDisplay())}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <LeftOutlined
          style={{
            transform: mode === "reduce" ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        <span
          style={{
            opacity: mode === "reduce" ? 0 : 1,
            transition: "opacity 0.3s ease",
            width: mode === "reduce" ? 0 : "auto",
          }}
        >
          {mode === "reduce" ? "" : "Thu gọn"}
        </span>
      </div>
    </div>
  );
}
