"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Bell,
  Heart,
  LayoutGrid,
  LayoutList,
  Menu,
  RefreshCcw,
  RefreshCcwDot,
  User,
} from "lucide-react";
import ToggleTheme from "@/theme/ToggleTheme";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { bgColors, textColors } from "@/constants";
import { Truncate } from "@/lib/truncate";

export const ServiceLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col ">
      <ServiceNav />
      <FilterTab />
      <ServiveLayoutContent />
    </div>
  );
};

const FilterTab = () => {
  return (
    <div className="w-full py-6 px-2 sm:px-10 flex items-center gap-4 border-b border-t overflow-hidden overflow-x-auto scrollbar-none">
      <Input placeholder="Search" className="grow  min-w-44" />
      <SelectScrollable />
      <SelectScrollable />
      <SelectScrollable />
      <Button variant="secondary" className="w-32">
        Appliquer
      </Button>
    </div>
  );
};

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

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

export const ServiveLayoutContent = () => {
  const [layout, setLayout] = useState("grid");
  let activeLayoutClass =
    "bg-amber-500 text-slate-100 hover:bg-amber-500 hover:text-slate-100";
  return (
    <div className="grow px-4 sm:px-10 py-2 bg-slate-100 dark:bg-background overflow-hidden">
      <div className="flex h-full rounded-md   gap-4 overflow-hidden">
        <ScrollArea className="grow">
          <div className="flex items-center justify-between pb-1 w-full">
            <h3 className="text-lg font-semibold text-amber -500 ">
              210 profiles
            </h3>
            <div className="flex gap-2 justify-center items-center">
              <Button
                className="p-2 text-amber-500 hover:text-amber-500 focus-within:bg-transparent focus-within:animate-spin focus-within:hover:bg-transparent"
                variant="ghost"
              >
                <RefreshCcw className="w-5 h-5" />
              </Button>
              <div className="flex gap-0.5 py-0.5 px-1 border rounded-md">
                <Button
                  className={cn(
                    "p-2",
                    layout === "grid" ? activeLayoutClass : "text-slate-700"
                  )}
                  variant="ghost"
                  onClick={() => setLayout("grid")}
                >
                  <LayoutGrid className="w-5 h-5" />
                </Button>
                <Button
                  className={cn(
                    "p-2",
                    layout === "list" ? activeLayoutClass : "text-slate-700"
                  )}
                  variant="ghost"
                  onClick={() => setLayout("list")}
                >
                  <LayoutList className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-2">
            {layout === "grid" ? <SerciveLayoutGrid /> : <SerciveLayoutList />}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const SerciveLayoutList = () => {
  return "list";
};

const SerciveLayoutGrid = () => {
  const data = [...Array(50).keys()];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <SerciveLayoutGridCard key={item} />
      ))}
    </div>
  );
};

const SerciveLayoutGridCard = () => {
  const skills = ["HTML", "CSS", "Javascript", "React", "Svelte", "Angular"];

  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex justify-center items-center gap-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-slate-600 dark:text-slate-100">Mouhamed Lamotte</h4>
            <h6 className="text-sm text-slate-400 dark:text-slate-200">Web Developer</h6>
          </div>
        </div>
        <Button className="p-2 text-slate-500" variant="ghost">
          <Heart />
        </Button>
      </div>
      <div className="mt-4 w-full " orientation="horizontal">
        <ul className="flex gap-4 overflow-x-auto py-2 scrollbar-none">
          {skills.map((skill) => (
            <li
              className={`text-sm font-semibold px-2 rounded-md text-slate-100 p-1 ${
                bgColors[Math.floor(Math.random() * bgColors.length)]
              }`}
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 mb-4">
        <p className="text-sm text-slate-700 dark:text-slate-100">
          <Truncate
            str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            max={60}
            len={60}
          />
        </p>
      </div>
      <Separator className="mt-4" />
      <div className="flex justify-between mt-4 items-center">
          <p className="px-4 py-1 rounded-md text-xs bg-cyan-500/40 text-cyan-500 dark:text-slate-100 font-semibold" >
            Senior
            </p>
            <Button className="p-2 text-slate-500 dark:text-slate-100" variant="ghost">
                voir le profil
                </Button>
      </div>
    </div>
  );
};
