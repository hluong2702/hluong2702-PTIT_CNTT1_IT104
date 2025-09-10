import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const result = useParams();
    console.log("Id: ", window.location.pathname.split("/")[2]);
    console.log("result: ", result);
  return (
    <div>Student</div>
  )
}
