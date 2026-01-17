import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Sarva Samarth Foundation" width={48} height={48} className="h-12 w-12 object-contain" />
              <span className="font-bold text-primary">Sarva Samarth Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Dedicated to helping people in dire need - children, elderly, women, and those who need our support in Ahmedabad, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/live" className="hover:text-primary transition-colors">Live Impact</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media & Admin */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/ssfoundation21/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ssfoundation21/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/c/SarvaSamarthFoundation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <Link href="/admin" className="text-sm font-medium text-muted-foreground hover:text-primary underline underline-offset-4">
                Admin Login
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarva Samarth Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
