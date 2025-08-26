import React from 'react'

interface PropsInterface {
    name: string,
}
export default function DemoFunctionComponents({name}: PropsInterface) {
  return (
    <div>
      <span>Tên: {name}</span>
    </div>
  )
}