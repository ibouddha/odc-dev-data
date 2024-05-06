import ToggleTheme from "@/theme/ToggleTheme";
import { Dices } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-slate-800 p-4 h-screen max-w-md border-r border-l dark:border-slate-700 mx-auto">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <Image height={80} width={80} src="/logo.png" alt="logo" />
        </div>
        <ToggleTheme />
      </div>
      {/* Content */}
      <div className="grow flex flex-col justify-center items-center mt-20">
        <div>
          <h3 className="text-3xl mt-8 font-bold text-center">
            DEV DATA <br /> SONATEL ACADEMY
          </h3>
          <h3 className="text-lg font-bold text-center mt-4">
            Site en construction <span className="text-red-500">🚧</span>
            <br />
          </h3>

          <div className="flex justify-center mt-6">
            <div className=" rounded-sm border bg-slate-400 dark:bg-slate-950  max-w-56 overflow-hidden">
              <h3 className="text-lg font-bold text-center border-b border-b-slate-300 dark:border-b-slate-700 p-2 px-4">
                Pages disponibles
              </h3>
              <ul className="w-full divide-y-2 divide-gray-300 dark:divide-slate-700 max-h-52 overflow-x-hidden overflow-y-auto scrollbar-none">
                <li className="p-2 bg-slate-200 dark:bg-slate-900  hover:bg-slate-300 dark:hover:bg-slate-700 ">
                  <a
                    className="font-semibold text-slate-900 dark:text-white flex items-center justify-between"
                    href="/inside/random"
                  >
                    Random Choice
                    <Dices />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8  py-3 border-t dark:border-slate-700">
            <p className="text-sm font-normal text-center">
              Contribuer sur <span className="font-bold">GitHub</span> et
              rejoigner la team <span className="font-bold">Notion</span>
            </p>
            <div className="sm:flex justify-center gap-4">
              <a
                className="text-lg font-bold text-center mt-4 flex flex-1  gap-4 items-center bg-slate-900 hover:scale-105 hover:bg-slate-700 text-white py-2 px-4 rounded justify-center"
                href="https://github.com/mouhamedlamotte/odc-dev-data"
                target="_blank"
              >
                GitHub
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      className="fill-slate-50"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.notion.so/invite/8dabcc1560363cea85ebb60b58ccbea52543dc6a"
                className="flex-1 text-lg font-bold text-center mt-4 flex  gap-4 items-center  bg-slate-300  hover:scale-105 hover:bg-slate-200 dark:text-black py-2 px-4 rounded justify-center"
                target="_blank"
              >
                Notion
                <svg
                  fill="#000000"
                  className="h-10 w-10"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
                </svg>
              </a>
            </div>
          </div>
    </div>
  );
}
