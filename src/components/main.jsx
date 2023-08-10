import React from "react";

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="mx-auto bg-white rounded-xl shadow-md w-full max-w-lg md:max-w-5xl overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                src="/public/image1.jpg"
                alt="uploaded image"
                className="h-48 w-full object-cover md:h-full md:w-48 aspect-square"
              ></img>
            </div>
            <div className="p-4 flex flex-col gap-2 overflow-hidden">
              <div className="">
                <a
                  href="#"
                  className="mb-[20px] font-semibold text-xl hover:underline"
                >
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta aliquam, nihil ab, temporibus cumque facere deserunt
                    error molestias libero at natus perferendis sed quidem quasi
                    ex debitis aliquid? Quas, labore!
                  </p>
                </a>
              </div>
              <div className="overflow-hidden">
                <p className="text-stone-400 whitespace-nowrap text-ellipsis truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  facilis ea molestiae, magnam inventore modi ipsum dolorum
                  aperiam nostrum doloribus deleniti quis, soluta ducimus
                  repellat non minus est tempore velit?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Vero officiis quasi sed
                  dignissimos ut qui voluptate ea, a quas cum maiores inventore
                  praesentium eos aperiam ipsam. Iure molestias aspernatur
                  officiis.
                </p>
              </div>
              <div>
                <p className="text-stone-400">
                  Created By <span className="text-zinc-700">USER</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
