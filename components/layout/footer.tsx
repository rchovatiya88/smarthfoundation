import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Heart className="h-5 w-5 text-primary" fill="currentColor" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for{" "}
            <a
              href="https://www.instagram.com/siddharajsinh01/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Samarth Foundation
            </a>
            . Helping the homeless in Ahmedabad.
          </p>
        </div>
        <div className="flex gap-4">
           <Link href="/admin" className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary">
              Admin Login
           </Link>
        </div>
      </div>
    </footer>
  )
}
