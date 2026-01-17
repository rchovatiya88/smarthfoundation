"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

export default function AddRescuePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      location: formData.get('location'),
      name: formData.get('name') || null,
      age: formData.get('age') ? parseInt(formData.get('age') as string) : null,
      gender: formData.get('gender') || null,
      contactNumber: formData.get('contactNumber') || null,
      description: formData.get('description') || null,
      condition: formData.get('condition') || null,
      needs: formData.get('needs') || null,
      medicalHistory: formData.get('medicalHistory') || null,
      followUpNotes: formData.get('followUpNotes') || null,
      rescuedBy: formData.get('rescuedBy') || null,
      foodGiven: formData.get('foodGiven') === 'on',
      shelterGiven: formData.get('shelterGiven') === 'on',
      medicalGiven: formData.get('medicalGiven') === 'on',
      status: formData.get('status')
    }

    try {
      const response = await fetch('/api/rescues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success("Rescue record created successfully")
        router.push('/admin/rescues/list')
      } else {
        toast.error("Failed to create rescue record")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Add New Rescue</h2>
        <p className="text-muted-foreground">Record details of a new rescue operation</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Location and identification details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" name="location" placeholder="e.g., Maninagar, Ahmedabad" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rescuedBy">Rescued By</Label>
                  <Input id="rescuedBy" name="rescuedBy" placeholder="Volunteer/Team member name" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Details */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Information about the individual (optional/anonymous)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Name (if known)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" type="number" placeholder="Age" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select name="gender">
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Child">Child</SelectItem>
                      <SelectItem value="Elderly">Elderly</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input id="contactNumber" name="contactNumber" placeholder="Contact number (if available)" />
              </div>
            </CardContent>
          </Card>

          {/* Condition & Medical */}
          <Card>
            <CardHeader>
              <CardTitle>Condition & Medical Details</CardTitle>
              <CardDescription>Health status and medical information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="condition">Current Condition</Label>
                <Input id="condition" name="condition" placeholder="e.g., Weak, Injured, Malnourished" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medicalHistory">Medical History</Label>
                <Textarea 
                  id="medicalHistory" 
                  name="medicalHistory" 
                  placeholder="Any known medical conditions, allergies, or ongoing treatments"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">General Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Describe the situation, how the person was found, etc."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Needs & Assistance */}
          <Card>
            <CardHeader>
              <CardTitle>Needs & Assistance Provided</CardTitle>
              <CardDescription>What support is needed and what has been provided</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="needs">Immediate Needs</Label>
                <Input id="needs" name="needs" placeholder="e.g., Food, Shelter, Medical, Clothing" />
              </div>
              
              <div className="space-y-3">
                <Label>Assistance Provided</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="foodGiven" name="foodGiven" />
                    <Label htmlFor="foodGiven" className="font-normal cursor-pointer">Food Provided</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shelterGiven" name="shelterGiven" />
                    <Label htmlFor="shelterGiven" className="font-normal cursor-pointer">Shelter Arranged</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="medicalGiven" name="medicalGiven" />
                    <Label htmlFor="medicalGiven" className="font-normal cursor-pointer">Medical Care Provided</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up & Status */}
          <Card>
            <CardHeader>
              <CardTitle>Follow-up & Status</CardTitle>
              <CardDescription>Additional notes and case status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="followUpNotes">Follow-up Notes</Label>
                <Textarea 
                  id="followUpNotes" 
                  name="followUpNotes" 
                  placeholder="Any follow-up actions needed, family contact status, rehabilitation progress, etc."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue="In Progress">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} data-testid="save-rescue-button">
              {isLoading ? "Saving..." : "Save Rescue Record"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
