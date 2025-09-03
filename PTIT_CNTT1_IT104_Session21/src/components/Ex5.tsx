import "../style.css"

export default function Ex5() {
  return (
    <div className="flex p-[30px] bg-blue-300 w-[fit-content] rounded-[8px] ">
  <div className="relative bg-blue-200 p-[60px]">
    Relative Parent
    <button className="absolute bottom-0 left-0 bg-blue-400 p-2 text-white rounded-[8px]">
      Absolute child
    </button>
  </div>
</div>
  )
}