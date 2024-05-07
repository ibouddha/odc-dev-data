"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Bell,
  Menu,
  User,
} from "lucide-react";
import ToggleTheme from "@/theme/ToggleTheme";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectScrollable } from "../ui/selectScrollable";
import { ServiceLayoutContent } from "./ServiceLayoutContent";

export const ServiceLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col ">
      <ServiceNav />
      <FilterTab />
      <ServiceLayoutContent />
    </div>
  );
};

const FilterTab = () => {

    const Refs = [
        {
            name: "Tous",
            value: "all"
        },
        {
            name: "Developement Data",
            value: "dev_data"
        },
        {
            name: "Developement Web et Mobile",
            value: "dev_web_mobile"
        },
        {
            name: "Referant Digital",
            value: "ref_dig"
        }
    ]   

    const promos = [
        {
            name: "Tous",
            value: "all"
        }
    ];

    for (let i = 1; i <= 6; i++) {
      promos.push({ "name": `promos ${i}`, "value": `p_${i}` });
    }

    const xps = [
        {
            name: "Tous",
            value: "all"
        },
        {
            name: "Junior (0-3 ans)",
            value: "junior"
        },
        {
            name: "Intermediaire (3-5 ans)",
            value: "intermediaire"
        },
        {
            name: "Senior (5-10 ans)",
            value: "senior"
        },
        {
            name: "Expert (10+ ans)",
            value: "expert"
        }
    ]

  return (
    <div className="w-full py-6 px-2 sm:px-10 flex items-center gap-4 border-b border-t overflow-hidden overflow-x-auto scrollbar-none">
      <Input placeholder="Search" className="grow  min-w-44" />
      <SelectScrollable trigger="Promotion" content={promos} />
      <SelectScrollable trigger="Referenciel" content={Refs} />
      <SelectScrollable trigger="Experience"  content={xps}/>
      <Button variant="secondary" className="w-32">
        Appliquer
      </Button>
    </div>
  );
};



const ServiceNav = () => {
  const pathname = usePathname();
  const routes = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Profiles",
      path: "/service/profiles",
    },
    {
      name: "Alumnis",
      path: "/service/alumnis",
    },
  ];

  return (
    <div className="w-full py-4 px-4 sm:px-10 flex justify-between items-center">
        <Button variant="ghost" className="md:hidden py-2 px-2">
        <Menu />
        </Button>
      <div className="hidden md:flex gap-2 items-end">
        <Image src="/logo.png" width={30} height={30} alt="logo" />
        <h3 className="text-lg font-bold text-amber-500 ">SONATEL ACADEMY</h3>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          {routes.map((route) => (
            <li
              className={clsx(
                "hover:text-amber-500 font-semibold",
                pathname === route.path && "text-amber-500"
              )}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          {/* <Button variant="primary" className="gap-1 text-white">
                    <LogIn className="w-5 h-5" />
                        Se connecter</Button> */}
          <div className="flex gap-1 items-center">
            <Button variant="ghost" className="rounded-md p-2">
              <Bell />
            </Button>
            <ToggleTheme />

            <Separator orientation="vertical" className="h-6 w-0.5 mx-2" />
            <Button variant="ghost" className="gap-2 p-2 justify-between">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <h6 className="text-xs text-start text-slate-400">
                  Entreprise
                </h6>
                <h3 className="text-start text-slate-300">Subito</h3>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};








