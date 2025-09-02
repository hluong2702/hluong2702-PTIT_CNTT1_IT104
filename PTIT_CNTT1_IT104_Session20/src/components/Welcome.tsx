import React from 'react'

export default function Welcome() {
    const Welcome = () => {
        useEffect(() => {
             console.log('Component đã được render lần đầu!');
  }, [])};
  return (
    <div>
      <h1>Chào mừng bạn đến với ứng dụng của chúng tôi</h1>
    </div>
  )
}
