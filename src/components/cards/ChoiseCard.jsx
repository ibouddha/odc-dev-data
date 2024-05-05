import { bgColors, defaultAvatar, shadows } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

export const RandomChoiceCard = ({ choice, active = false }) => {
  return (
    <div
      className={clsx(
        "rounded-md card w-full md:w-48 shadow-md dark:shadow-none lg:w-52 xl:w-56 bg-white dark:bg-slate-700 pb-10 px-6 opacity-80"
      )}
    >
      <div className="flex justify-center flex-col items-center">
        <div
          className={`py-[1px] ${
            bgColors[Math.floor(Math.random() * bgColors.length)]
          } rounded-lg w-9/12`}
        ></div>
        <div
          className={`mt-10 rounded-full h-20 w-20 bg-slate-500 overflow-hidden shadow-md ${
            shadows[Math.floor(Math.random() * shadows.length)]
          }`}
        >
          <Image
            width={100}
            height={100}
            src={choice?.avatar ? choice?.avatar : defaultAvatar}
                alt={choice?.firstName}
            className="fill-black dark:fill-white rounded-full"
          />
        </div>
        <h3 className="text-center jomhuria-regular text-2xl text-slate-800 dark:text-white mt-8">
          {choice?.firstName}
          <br/>
          {choice?.lastName}
        </h3>
      </div>
    </div>
  );
};
