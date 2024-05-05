import { PromoContext } from "@/context/PromoContext";
import { getPromos } from "@/db/fetchdata";
import ToggleTheme from "@/theme/ToggleTheme";
import clsx from "clsx";
import { ChevronDown, ChevronUp, PlusCircle } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";


export const TopBar = () => {
  const { data, dispatch } = useContext(PromoContext);
  const [showPromo, setShowPromo] = useState(false);

  const [promos, setPromos] = useState([]);

  const changePromo = (promo) => {
    dispatch({ type: "CHANGE_PROMO", payload: promo });
    setShowPromo(false);
  };

  const fetchPromos = async () => {
    const result = await getPromos();
    console.log("result", result);
    if (result && data) {
      const new_promos = result.filter(
        (promo) => {
          return promo?.id !== data?.promo?.id
        }
      );
      setPromos(new_promos);
    }
  };


  return (
    <nav className="fixed top-0 z-50 w-full ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="items-center hidden sm:flex">
            <a href="/">

        <Image src="/logo.png" alt="logo" width={80} height={80} className="hidden sm:flex" />
            </a>
          {data?.promo ? (
            <div className="relative ml-4 flex items-center">
              <button
                className="bg-white dark:bg-slate-900 px-1 py-1  rounded-full border-8 border-[#F0F0F0] dark:border-slate-800 sm:flex items-center gap-4 hidden hover:bg-slate-300 dark:hover:bg-slate-700"
                onClick={() => {
                  if (!showPromo) {
                    fetchPromos();
                  }
                   setShowPromo(!showPromo)
                  }}
              >
                <div className="rounded-full p-2 bg-green-500">
                  <h3 className="text-3xl text-white">{data?.promo?.Code}</h3>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white uppercase">
                  {data?.promo?.Name}
                </h3>
                {showPromo ? (
                  <ChevronUp
                    focusable
                    size={50}
                    className="text-slate-800 dark:text-white"
                  />
                ) : (
                  <ChevronDown
                    focusable
                    size={50}
                    className="text-slate-800 dark:text-white"
                  />
                )}
              </button>
              <div
                className={clsx(
                  "absolute  mx-auto w-full top-20 border-2 border-slate-400 dark:border-slate-800 rounded-b-xl divide-y-2 overflow-hidden transition-collapse ease-in duration-300",
                  showPromo ? "block" : "hidden"
                )}
              >
                {promos.map((promo) => (
                  <PromoButtonList
                    key={promo.id}
                    promo={promo}
                    onclick={() => changePromo(promo)}
                  />
                ))}
                <button
                  className="bg-white w-full dark:bg-slate-900 px-1 py-1 pr-20 border-[#F0F0F0] dark:border-slate-800 sm:flex items-center gap-4 hidden hover:bg-slate-300 dark:hover:bg-slate-700"
                  onClick={onclick}
                >
                  <div className="rounded-full p-2  flex justify-center items-center">
                  <PlusCircle className="text-slate-800 dark:text-white" fontSize={50} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    Add Promo
                  </h3>
                </button>
              </div>
            </div>
          ) : <SwitchPromoButtonSkeleton />}

          </div>

          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PromoButtonList = ({ promo, onclick }) => {
  return (
    <button
      className="bg-white w-full dark:bg-slate-900 px-1 py-1 pr-20 border-[#F0F0F0] dark:border-slate-800 sm:flex items-center gap-4 hidden hover:bg-slate-300 dark:hover:bg-slate-700"
      onClick={onclick}
    >
      <div className="rounded-full p-2 h-8 w-8 bg-green-500 flex justify-center items-center">
        <h3 className="text-lg text-white m-0 p-0">{promo?.Code}</h3>
      </div>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white uppercase">
        {promo?.Name}
      </h3>
    </button>
  );
};


const SwitchPromoButtonSkeleton = () => {
  return (
    <div
      className="bg-white relative ml-4  dark:bg-slate-900 px-1 py-1  rounded-full border-8 border-[#F0F0F0] dark:border-slate-800 sm:flex items-center gap-4 hidden hover:bg-slate-300 dark:hover:bg-slate-700"
    >
      <div className="rounded-full  p-6 bg-slate-500 animate-pulse">
      </div>
      <h3 className="text-3xl w-52 h-4 bg-slate-400 rounded-full animate-pulse">
      </h3>
      <ChevronDown
                    focusable
                    size={50}
                    className="text-slate-500 dark:text-slate-300"
                  />
    </div>
  )
}
