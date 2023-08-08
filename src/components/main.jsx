import React from "react";

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-center gap-[20px] border-b-2 pb-[10px]">
          <div className="aspect-square h-[200px]">
            <a href="#">
              <img
                src="/public/image1.jpg"
                alt="requested img"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
          <div className="flex flex-col gap-[10px]">
            <a href="#">
              <p className="font-bold text-lg mt-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, repudiandae dolore minima maxime error nemo dignissimos
                illum veritatis dolores.
              </p>
            </a>
            <p className="mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              earum ad voluptates tempore neque voluptas
            </p>
            <p className="mt-0">Created by "Username"</p>
            <p className="mt-0">Date:xx/xx/xxxx</p>
            <p className="mt-0">Time:xx:xx</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
