"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Seva Samarth Foundation" width={48} height={48} className="h-12 w-12 object-contain" />
              <span className="font-bold text-primary">Seva Samarth Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">{t("home")}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t("about")}</Link></li>
              <li><Link href="/live" className="hover:text-primary transition-colors">{t("live")}</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">{t("donate")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Social Media & Admin */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">{t("connectWith")}</h3>
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
                {t("adminLogin")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Seva Samarth Foundation. {t("allRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
