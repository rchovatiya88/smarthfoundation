import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6 mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">About Sarva Samarth Foundation</h1>
           <p className="text-lg text-gray-500 text-justify">
             The Sarva Samarth Foundation is a beacon of hope in Ahmedabad, Gujarat, dedicated to serving the most vulnerable members of our society - including children, elderly, women, and anyone in dire need of assistance.
           </p>
           <p className="text-lg text-gray-500 text-justify">
             Our organization works tirelessly to ensure that no human being is deprived of basic necessities like food, shelter, medical care, and dignity. We believe that every person, regardless of their circumstances, deserves compassion and support.
           </p>
           <p className="text-lg text-gray-500 text-justify">
             Our mission goes beyond just providing immediate relief; we strive to rehabilitate individuals, reconnect them with their families when possible, provide medical care to those who have been neglected, and offer a pathway to a better future.
           </p>
           <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
             <p className="text-sm font-medium text-primary mb-1">Our Vision</p>
             <p className="text-gray-600">A society where no one is left behind, where every child, every elderly person, every woman in need has access to basic necessities and the opportunity to live with dignity.</p>
           </div>
           <div className="flex gap-4 pt-4">
             <Button asChild>
                <a href="https://www.instagram.com/ssfoundation21/?hl=en" target="_blank" rel="noopener noreferrer">
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
        <div className="relative h-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden flex items-center justify-center p-8">
           <div className="text-center space-y-4">
             <div className="text-6xl mb-4">🤝</div>
             <h3 className="text-2xl font-bold text-primary">Compassion in Action</h3>
             <p className="text-gray-600 max-w-md">We reach out to those who need us most - providing food, shelter, medical care, and hope to children, elderly, and women in need.</p>
             <div className="grid grid-cols-3 gap-4 pt-6">
               <div className="text-center">
                 <div className="text-3xl mb-2">👶</div>
                 <p className="text-sm font-medium text-gray-600">Children</p>
               </div>
               <div className="text-center">
                 <div className="text-3xl mb-2">👵</div>
                 <p className="text-sm font-medium text-gray-600">Elderly</p>
               </div>
               <div className="text-center">
                 <div className="text-3xl mb-2">👩</div>
                 <p className="text-sm font-medium text-gray-600">Women</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}
