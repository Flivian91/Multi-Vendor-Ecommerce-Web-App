import React from "react";

function Overlay({onClick}) {
  return (
    <div onClick={()=> onClick(false)} className="fixed w-full z-40 backdrop-blur-[2px]  top-0 left-0 h-screen md:hidden block"></div>
  );
}

export default Overlay;
