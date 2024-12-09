"use client"

import React from 'react'
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RefreshCcw } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { SerciveLayoutGrid } from '@/components/service/ServiceLayoutGrid';
import { SerciveLayoutList } from '@/components/service/ServiceLayoutList';





const Page = () => {
  const [layout, setLayout] = useState("grid");
  let activeLayoutClass =
    "bg-amber-500 text-slate-100 hover:bg-amber-500 hover:text-slate-100";
  return (
    <div className="grow px-4 sm:ps-10 sm:pe-1 py-2 bg-slate-100 dark:bg-background overflow-hidden">
      <div className="flex h-full rounded-md   gap-4 overflow-hidden">
        <ScrollArea className="grow sm:pe-8">
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
              <div className="hidden sm:flex gap-0.5 py-0.5 px-1 border rounded-md">
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
          <div className="py-2 hidden sm:block">
            {layout === "grid" ? <SerciveLayoutGrid  /> : <SerciveLayoutList />}
          </div>
          <div className="py-2 block sm:hidden">
            <SerciveLayoutGrid />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default Page