import {useState} from 'react'
export default function Bai4() {
    const [value, setText] = useState<string>("");
    const [status, setStatus] = useState<boolean>(false);
    const handleShow = () => {
        if(status === true){
            setText("");
            setStatus(false);
        }else{
            setText("tiêu đề văn bản");
            setStatus(true);
        }
    }
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <button onClick={handleShow}>{status === true ? "Ẩn" : "Hiện"}</button>
      <span>{value}</span>
    </div>
  )
}
