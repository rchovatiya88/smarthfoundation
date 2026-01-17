import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Utensils, Home, HeartHandshake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                Lending a Helping Hand to the Homeless
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join Siddhrajsinh Zala and the Samarth Foundation in our mission to provide food, shelter, and dignity to those in need across Ahmedabad.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/donate">
                  Donate Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-primary/10">
                <Link href="/live">
                  See Our Impact
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Wavy bottom border (SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-[calc(100%+1.3px)] fill-background">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
           </svg>
        </div>
      </section>

      {/* Mission Icons */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center p-6 text-center border-none shadow-none bg-transparent">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-4">
                <Utensils className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Food & Nutrition</h3>
              <p className="text-gray-500">Providing nutritious meals to prevent hunger and malnutrition on the streets.</p>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center border-none shadow-none bg-transparent">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-4">
                <Home className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shelter & Support</h3>
              <p className="text-gray-500">Connecting individuals with temporary and permanent shelter options.</p>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center border-none shadow-none bg-transparent">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-4">
                <HeartHandshake className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rescue & Dignity</h3>
              <p className="text-gray-500">Identifying those in urgent need and providing immediate compassionate care.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Preview (Mock Data) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
             <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Making a Real Impact</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transparency in every step. See how your support transforms lives in real-time.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-primary">120+</span>
                 <span className="text-sm font-medium text-gray-500 uppercase mt-2">Lives Rescued</span>
              </div>
               <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-primary">5000+</span>
                 <span className="text-sm font-medium text-gray-500 uppercase mt-2">Meals Served</span>
              </div>
               <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-primary">50+</span>
                 <span className="text-sm font-medium text-gray-500 uppercase mt-2">Shelters Found</span>
              </div>
               <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-primary">24/7</span>
                 <span className="text-sm font-medium text-gray-500 uppercase mt-2">Help Available</span>
              </div>
            </div>
            <div className="mt-12">
               <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                 <Link href="/live" className="flex items-center">
                   View Live Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
