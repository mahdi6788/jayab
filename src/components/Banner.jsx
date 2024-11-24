import React from "react";
import BannerImg from "../assets/img/banner.jpg";

function Banner() {
  return (
    <div
      className="h-[90vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="lg: ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg: text-left justify-center flex-1 px-4 lg:px-0">
        <h1 className="w-[140vh] text-3xl lg:text-[58px] font-semibold leading-none my-8 text-gray-100">
          <span className="text-green-300">ویلای</span> ایده آل شما اینجاست
        </h1>
      </div>
      <div className="flex mt-14">
        <p className="max-w-[480px] my-8  mx-4 text-center text-white text-2xl">
          اجاره ویلا و سوئیت در شمال ایران
          <br />
          سفر از تو جا از ما
        </p>
      </div>
    </div>
  );
}

export default Banner;
