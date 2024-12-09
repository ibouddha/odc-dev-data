import React from "react";

export const SideBar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform -translate-x-full bg-slate-50 sm:translate-x-0 dark:bg-slate-900"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-slate-50 dark:bg-slate-900"></div>
    </aside>
  );
};
