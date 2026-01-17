"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, IndianRupee, FileText, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      label: "Rescues",
      icon: Users,
      href: "/admin/rescues/list",
    },
    {
      label: "Donations",
      icon: IndianRupee,
      href: "/admin/donations",
    },
    {
      label: "Reports",
      icon: FileText,
      href: "/admin/reports",
    },
  ]

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      <div className="px-3 py-2 flex-1">
        <Link href="/admin/dashboard" className="mb-14 flex items-center pl-3">
          <h1 className="text-xl font-bold text-primary">
            Admin Panel
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "text-primary bg-primary/10"
                  : "text-zinc-600 dark:text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <form action="/api/auth/signout" method="POST">
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-primary"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </form>
      </div>
    </div>
  )
}
