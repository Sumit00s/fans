"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Menu,
  Flame,      // Popular
  Star,       // Fav
  Clock,      // History
  Video,      // Channels
  User,       // Models
  PlusCircle, // New
} from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation";


const MENU = [
  {
    name: "New",
    url: "/",
    icon: PlusCircle,
  },
  {
    name: "Popular",
    url: "/videos",
    icon: Flame,
  },
  {
    name: "Models",
    url: "/models",
    icon: User,
  },
  {
    name: "Channels",
    url: "/channels",
    icon: Video,
  },
  {
    name: "History",
    url: "/history",
    icon: Clock,
  },
  {
    name: "Fav",
    url: "/fav",
    icon: Star,
  },
];


export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav className="bg-black border-b border-gray-800 shadow-md">
      <div className="max-w-[1200px] w-full mx-auto flex flex-row items-center justify-between text-white p-4">
        <h1 className="font-bold text-3xl">
          <span className="text-pink-500">f</span>ans.
        </h1>
        <Sheet className="">
          <SheetTrigger asChild>
            <div className="cursor-pointer">
              <Menu className="w-6 h-6 text-white" />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-black text-white p-10">
        
                {MENU.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Link
                    key={index}
                    href={item.url}
                    className={`flex items-center gap-3 my-2 text-lg hover:text-pink-500 ${pathname === item.url ? "text-pink-500" : "text-white"}`}
                    >
                    <Icon className="w-5 h-5" />
                    {item.name}
                    </Link>
                );
                })}
    
            <Button className="mt-3 border border-pink-500 bg-pink-500 text-white focus:outline-none focus:ring-0 cursor-pointer">Login</Button>
          </SheetContent>  
        </Sheet>
      </div>
    </nav>
  )
}








