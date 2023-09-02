import React from "react";

const Carousel = () => {
  return (
    <div>
      <div style={{ height: "600px" }} className="carousel">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/334985/pexels-photo-334985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full ,"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-10 gap-5">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      {/* carousel end */}
    </div>
  );
};

export default Carousel;
