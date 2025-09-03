import "../style.css";

export default function Ex3() {
  return (
    <div style={{display: "flex", gap: "8px"}}>
      <div className="w-[200px] h-[200px] rounded-[100%] bg-[#3b82f6]"></div>
      <div className="w-[200px] h-[200px] rounded-[100%] bg-[#ef4444]"></div>
      <div className="w-[200px] h-[200px] rounded-[100%] bg-[#22c55e]"></div>
    </div>
  );
}