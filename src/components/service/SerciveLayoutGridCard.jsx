import { bgColors } from "@/constants";

const { Truncate } = require("@/lib/truncate");
const { Separator } = require("../ui/separator");
const { Button } = require("../ui/button");
const {  User, Bookmark } = require("lucide-react");
const { AvatarFallback, AvatarImage, Avatar } = require("../ui/avatar");

export const SerciveLayoutGridCard = () => {
    const skills = ["HTML", "CSS", "Javascript", "React/Nextjs", "Svelte", "Angular"];
  
    return (
      <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md  hover:shadow hover:border hover:border-cyan-500">
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
          <Bookmark />
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
  