import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bookmark, User } from "lucide-react";
import { Button } from "../ui/button";
import { bgColors } from "@/constants";

export const ServiceLayoutListItem = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React/Nextjs",
    "Svelte",
    "Angular",
  ];
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md hover:bg-background hover:border hover:border-cyan-500 hover:shadow">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">

        <div className="flex items-center gap-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-slate-600 dark:text-slate-100">
              Mouhamed Lamotte
            </h4>
            <h6 className="text-sm text-slate-400 dark:text-slate-200">
              Web Developer
            </h6>
          </div>
        </div>
        <div className="" >
          <ul className="flex gap-4 overflow-x-auto py-2 max-w-96 md:max-w-full p-3 rounded-md border md:px-0 md:border-none scrollbar-none">
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
        </div>
        <div className="flex flex-col gap-4  items-end">
        <div className="flex items-center gap-2">

        <p className="px-4 py-1 rounded-md text-xs bg-cyan-500/40 text-cyan-500 dark:text-slate-100 font-semibold" >
              Senior
              </p>
          <Button className="p-2 text-slate-500" variant="ghost">
          <Bookmark />
          </Button>
              </div>
          <Button
            className="p-2 text-slate-500 dark:text-slate-100 w-full bg-slate-200/20" 
            variant="ghost"
          >
            voir le profil
          </Button>
        </div>
      </div>
    </div>
  );
};
