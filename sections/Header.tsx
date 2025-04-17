import React from "react";

const Header = ({ isProductsInView }: { isProductsInView: boolean }) => {
  return (
    <div
      className="sticky z-50 top-0 bg-transparent"
      style={{ padding: `calc(0.76875rem + 1.76786vw) 0px` }}
    >
      <div className=" w-full mx-auto px-[6.3281vw] flex items-center justify-between">
        <div
          className={`text-p3 font-semibold flex items-center justify-center gap-2 ${
            isProductsInView ? "text-white-cream " : "text-black"
          }`}
        >
          <div
            className={`bg-black rounded-full w-[0.643em] h-[0.643em] ${
              isProductsInView ? "bg-white-cream " : "bg-black"
            }`}
          />
          <div className="text-p3">
            Vela Capitals
          </div>
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
