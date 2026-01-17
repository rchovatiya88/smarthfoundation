"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function DonatePage() {
  const [amount, setAmount] = React.useState("500")
  const [customAmount, setCustomAmount] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleDonate = () => {
    setIsLoading(true)
    const finalAmount = amount === "custom" ? customAmount : amount
    
    // Simulate Razorpay opening
    setTimeout(() => {
        setIsLoading(false)
        toast.success(`Razorpay Payment Gateway would open now for ₹${finalAmount}`, {
            description: "Live payments require API keys configuration."
        })
    }, 1500)
  }

  return (
    <div className="container py-12 px-4 md:px-6 mx-auto max-w-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Support Our Cause</h1>
        <p className="text-muted-foreground">Your contribution helps provide food, shelter, medical care, and dignity to those in need - children, elderly, women, and vulnerable individuals.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Make a Donation</CardTitle>
          <CardDescription>Select an amount or enter your own.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
           <RadioGroup defaultValue="500" onValueChange={setAmount} className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="500" id="amount-500" className="peer sr-only" />
                    <Label
                      htmlFor="amount-500"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                    >
                      <span className="text-xl font-bold">₹500</span>
                      <span className="text-xs text-center mt-1">10 Meals</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="1000" id="amount-1000" className="peer sr-only" />
                    <Label
                      htmlFor="amount-1000"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                    >
                      <span className="text-xl font-bold">₹1000</span>
                      <span className="text-xs text-center mt-1">Medical Kit</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="5000" id="amount-5000" className="peer sr-only" />
                    <Label
                      htmlFor="amount-5000"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                    >
                      <span className="text-xl font-bold">₹5000</span>
                      <span className="text-xs text-center mt-1">Shelter Support</span>
                    </Label>
                  </div>
              </div>

              <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                       <Label 
                          htmlFor="amount-custom" 
                          className="flex items-center space-x-2 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            <div className={`h-4 w-4 rounded-full border border-primary flex items-center justify-center ${amount === 'custom' ? 'bg-primary text-primary-foreground' : ''}`}>
                                {amount === 'custom' && <div className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                            <span>Or enter custom amount (₹)</span>
                        </Label>
                  </div>
                  <Input 
                      id="custom-input" 
                      type="number" 
                      placeholder="Enter amount" 
                      value={customAmount}
                      onChange={(e) => {
                          setAmount("custom")
                          setCustomAmount(e.target.value)
                      }}
                      onFocus={() => {
                          const radio = document.getElementById('amount-custom')
                          if (radio) radio.click()
                      }}
                      className={amount === 'custom' ? 'border-primary' : ''}
                  />
              </div>
            </RadioGroup>

            <div className="space-y-2">
                <Label htmlFor="purpose">Donation Purpose</Label>
                <Select defaultValue="general">
                  <SelectTrigger id="purpose">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Fund</SelectItem>
                    <SelectItem value="food">Food Distribution</SelectItem>
                    <SelectItem value="medical">Medical Assistance</SelectItem>
                    <SelectItem value="shelter">Shelter Support</SelectItem>
                    <SelectItem value="children">Children Support</SelectItem>
                    <SelectItem value="elderly">Elderly Care</SelectItem>
                    <SelectItem value="women">Women Support</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            
            <div className="space-y-4 pt-4 border-t">
               <h3 className="text-sm font-medium">Personal Information (Optional)</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="name">Name</Label>
                   <Input id="name" placeholder="Name" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="phone">Phone</Label>
                   <Input id="phone" placeholder="Mobile Number" />
                 </div>
               </div>
                <div className="space-y-2">
                   <Label htmlFor="email">Email</Label>
                   <Input id="email" placeholder="Email for receipt" />
                 </div>
            </div>

        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg h-12" onClick={handleDonate} disabled={isLoading}>
            {isLoading ? "Processing..." : `Donate ₹${amount === "custom" ? (customAmount || "0") : amount}`}
          </Button>
        </CardFooter>
      </Card>
      <div className="text-center mt-4 text-xs text-muted-foreground">
        Secure payment powered by Razorpay. All donations are tax-exempt under 80G.
      </div>
    </div>
  )
}
