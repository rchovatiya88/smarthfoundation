"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/live",
      label: "Live Impact",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <Image src="/logo.png" alt="Sarva Samarth Foundation" width={50} height={50} className="h-12 w-12 object-contain" />
            <span className="hidden font-bold sm:inline-block text-primary text-lg">
              Sarva Samarth Foundation
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other items can go here */}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/donate">
                Donate Now
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src="/logo.png" alt="Sarva Samarth Foundation" width={40} height={40} className="h-10 w-10 object-contain" />
                  <span className="font-bold text-primary text-sm">Sarva Samarth Foundation</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "bg-transparent py-1 text-sm font-medium transition-colors hover:text-primary",
                          pathname === route.href ? "text-primary" : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <Link
                       href="/donate"
                       className="bg-accent text-accent-foreground py-2 px-4 rounded-md text-center text-sm font-medium transition-colors hover:bg-accent/90 w-fit"
                       onClick={() => setIsOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
