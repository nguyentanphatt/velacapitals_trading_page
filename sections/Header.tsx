import React from "react";

const Header = () => {
  return (
    <div
      className="sticky z-10 top-0 bg-transparent"
      style={{ padding: `calc(0.76875rem + 1.76786vw) 0px` }}
    >
      <div className=" w-full mx-auto px-[6.3281vw] flex items-center justify-between">
        <div
          className="font-semibold text-black flex items-center gap-2"
          style={{ fontSize: `calc(0.76rem + 0.94286vw);` }}
        >
          <div className="bg-black rounded-full w-[0.643em] h-[0.643em]"></div>
          <div
            className=""
            style={{ fontSize: `calc(0.76rem + 0.94286vw);` }}
          >Vela Capitals</div>
        </div>
        <p
          style={{ fontSize: `calc(.7575rem + .70714vw)` }}
          className="text-red-600"
        >
          EN
        </p>
      </div>
    </div>
  );
};

export default Header;
