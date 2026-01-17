"use client"
import { useActionState, useEffect } from "react"
import { useFormStatus } from "react-dom"
import { authenticate } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function LoginPage() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined)

  useEffect(() => {
    if (errorMessage) {
        toast.error(errorMessage)
    }
  }, [errorMessage])

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Seva Samarth Foundation Admin Panel
            <br />
            <span className="text-xs text-green-600 font-medium mt-2 block">
              Demo: admin@samarth.org / any password
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
           <form action={dispatch} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" required />
            </div>
            <LoginButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button className="w-full" aria-disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </Button>
  )
}
