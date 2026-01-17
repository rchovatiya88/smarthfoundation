import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6 mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">About Samarth Foundation</h1>
           <p className="text-lg text-gray-500 text-justify">
             The Samarth Foundation is a beacon of hope in Ahmedabad, dedicated to serving the most vulnerable members of our society—the homeless and the destitute.
           </p>
           <p className="text-lg text-gray-500 text-justify">
             Led by the compassionate vision of <span className="font-semibold text-gray-900">Siddhrajsinh Zala</span>, our organization works tirelessly to ensure that no human being is deprived of basic necessities like food, shelter, and dignity.
           </p>
           <p className="text-lg text-gray-500 text-justify">
             Our mission goes beyond just providing handouts; we strive to rehabilitate individuals, reconnect them with their families when possible, and provide medical care to those who have been neglected by society.
           </p>
           <div className="flex gap-4 pt-4">
             <Button asChild>
                <a href="https://www.instagram.com/siddharajsinh01/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
             </Button>
             <Button asChild variant="outline">
               <Link href="/contact">
                 Contact Us
               </Link>
             </Button>
           </div>
        </div>
        <div className="relative h-[400px] lg:h-[600px] bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
           {/* Placeholder for Siddhrajsinh's image */}
           <span className="text-gray-400 font-medium">Image of Siddhrajsinh Zala & Team</span>
           {/* <Image src="/placeholder.jpg" fill className="object-cover" alt="Siddhrajsinh Zala helping people" /> */}
        </div>
      </div>
    </div>
  )
}
