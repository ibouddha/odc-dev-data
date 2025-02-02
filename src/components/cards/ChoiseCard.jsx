import clsx from "clsx";
import Image from "next/image";

export const RandomChoiceCard = ({ choice, active = false }) => {
    return (
      <div
        className={clsx(
          "rounded-md card w-full md:w-48 lg:w-52 xl:w-56 bg-slate-900 dark:bg-white pb-10 px-6 opacity-80",
        )}
      >
        <div className="flex justify-center flex-col items-center">
          <div className="py-[1px] bg-red-500 rounded-lg w-9/12"></div>
          <div className="mt-10 rounded-full h-14 w-14 bg-slate-500 overflow-hidden">
            <Image
              width={100}
              height={100}
              src={choice?.avatar ? choice?.avatar : "/images/defaultchoise.png"}
              alt={choice?.firstName
              }
              className="fill-black dark:fill-white rounded-full"
            />
          </div>
          <h3 className="text-center jomhuria-regular text-2xl text-white dark:text-black mt-8">
            {choice?.firstName
}
            <br/>
            {choice?.lastName}
          </h3>
        </div>
      </div>
    );
  };