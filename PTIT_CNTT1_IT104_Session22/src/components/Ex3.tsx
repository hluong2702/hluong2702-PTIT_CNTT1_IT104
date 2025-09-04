import React from 'react'

export default function Ex3() {
  return (
     <div className="d-flex gap-3">
      <div className="card" style={{ width: "16.5rem" }}>
        <img
          src="https://s.yimg.com/uu/api/res/1.2/WxN_MtJkaKUcJtofqoS8WQ--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2018-11/d3642120-e12e-11e8-b7f6-d080f65615ce"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-center">MacBook Air 2018</h5>
          <p className="card-text text-center">
            The reason I am selling the machine is because it is too much power
            for what I need
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="btn btn-primary">
              Xem chi tiết
            </a>
            <span>30.000.000 đ</span>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "16.5rem" }}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.BF3oZ47dBc_6LndYO6JkmwHaFj?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          className="card-img-top"
          height="180px"
        />
        <div className="card-body">
          <h5 className="card-title text-center">MacBook Pro 2019</h5>
          <p className="card-text text-center">
            he reason I am selling the machine is because it is too much power
            for what I need
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="btn btn-primary">
              Xem chi tiết
            </a>
            <span>30.000.000 đ</span>
          </div>
        </div>
      </div>
    </div>
  )
}
