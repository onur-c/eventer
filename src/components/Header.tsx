"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

const Header = () => {
  const activePath = usePathname();
  return (
    <header className="w-full  flex justify-between items-center px-4 h-16 bg-[#3f3250] text-white border-solid border-b-[1px] border-white/20">
      <Link href={"/"} className="font-bold hover:opacity-80 transition">
        EVENT<span className="text-accent">ER</span>
      </Link>
      <div className="flex gap-2 h-full">
        {routes.map((route, idx) => {
          return (
            <li
              key={idx}
              className="list-none relative h-full flex items-center"
            >
              <Link
                className={cn("transition", {
                  "text-white ": activePath === route.path,
                  "text-white/50 hover:text-white": activePath !== route.path,
                })}
                href={route.path}
              >
                {route.name}
              </Link>
              {activePath === route.path && (
                <motion.div
                  layoutId="active-path"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
