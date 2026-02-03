"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

type RescueFormProps = {
  mode: "create" | "edit"
  initialData?: any
}

export function RescueForm({ mode, initialData }: RescueFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      location: formData.get("location"),
      name: formData.get("name") || null,
      age: formData.get("age")
        ? parseInt(formData.get("age") as string)
        : null,
      gender: formData.get("gender") || null,
      contactNumber: formData.get("contactNumber") || null,
      description: formData.get("description") || null,
      condition: formData.get("condition") || null,
      needs: formData.get("needs") || null,
      medicalHistory: formData.get("medicalHistory") || null,
      followUpNotes: formData.get("followUpNotes") || null,
      rescuedBy: formData.get("rescuedBy") || null,
      foodGiven: formData.get("foodGiven") === "on",
      shelterGiven: formData.get("shelterGiven") === "on",
      medicalGiven: formData.get("medicalGiven") === "on",
      status: formData.get("status"),
    }

    try {
      const response = await fetch(
        mode === "create"
          ? "/api/rescues"
          : `/api/rescues/${initialData.id}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )

      if (!response.ok) throw new Error()

      toast.success(
        mode === "create"
          ? "Rescue record created successfully"
          : "Rescue record updated successfully"
      )

      router.push("/admin/rescues/list")
      router.refresh()
    } catch {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Location and identification details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    required
                    defaultValue={initialData?.location}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rescuedBy">Rescued By</Label>
                  <Input
                    id="rescuedBy"
                    name="rescuedBy"
                    defaultValue={initialData?.rescuedBy}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Details */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>
                Information about the individual (optional/anonymous)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={initialData?.name}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    defaultValue={initialData?.age ?? ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    name="gender"
                    defaultValue={initialData?.gender ?? undefined}
                  >
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
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  defaultValue={initialData?.contactNumber}
                />
              </div>
            </CardContent>
          </Card>

          {/* Condition & Medical */}
          <Card>
            <CardHeader>
              <CardTitle>Condition & Medical Details</CardTitle>
              <CardDescription>
                Health status and medical information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="condition">Current Condition</Label>
                <Input
                  id="condition"
                  name="condition"
                  defaultValue={initialData?.condition}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalHistory">Medical History</Label>
                <Textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  className="min-h-[80px]"
                  defaultValue={initialData?.medicalHistory}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">General Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  className="min-h-[100px]"
                  defaultValue={initialData?.description}
                />
              </div>
            </CardContent>
          </Card>

          {/* Needs & Assistance */}
          <Card>
            <CardHeader>
              <CardTitle>Needs & Assistance Provided</CardTitle>
              <CardDescription>
                What support is needed and what has been provided
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="needs">Immediate Needs</Label>
                <Input
                  id="needs"
                  name="needs"
                  defaultValue={initialData?.needs}
                />
              </div>

              <div className="space-y-3">
                <Label>Assistance Provided</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="foodGiven"
                      name="foodGiven"
                      defaultChecked={initialData?.foodGiven}
                    />
                    <Label htmlFor="foodGiven">Food Provided</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="shelterGiven"
                      name="shelterGiven"
                      defaultChecked={initialData?.shelterGiven}
                    />
                    <Label htmlFor="shelterGiven">Shelter Arranged</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="medicalGiven"
                      name="medicalGiven"
                      defaultChecked={initialData?.medicalGiven}
                    />
                    <Label htmlFor="medicalGiven">Medical Care Provided</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up & Status */}
          <Card>
            <CardHeader>
              <CardTitle>Follow-up & Status</CardTitle>
              <CardDescription>
                Additional notes and case status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="followUpNotes">Follow-up Notes</Label>
                <Textarea
                  id="followUpNotes"
                  name="followUpNotes"
                  className="min-h-[100px]"
                  defaultValue={initialData?.followUpNotes}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  name="status"
                  defaultValue={initialData?.status ?? "In Progress"}
                >
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
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? "Saving..."
                : mode === "create"
                ? "Save Rescue Record"
                : "Update Rescue Record"}
            </Button>
          </div>

        </div>
      </form>
    </div>
  )
}
