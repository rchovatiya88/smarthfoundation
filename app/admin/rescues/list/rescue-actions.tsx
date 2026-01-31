"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DownloadIcon, Pencil, Trash2 } from "lucide-react"
import { generateRescuePDF } from "@/lib/pdf-generator"

export function RescueActions({ rescue }: { rescue: any }) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/admin/rescues/edit/${rescue.id}`)
  }

  const handleDelete = async () => {
  const ok = confirm("Are you sure you want to delete this rescue?")
  if (!ok) return

  try {
    const res = await fetch(`/api/rescues/${rescue.id}`, {
      method: "DELETE",
    })

    if (!res.ok) {
      throw new Error("Delete failed")
    }

    alert("Deleted successfully")

    // Refresh the list page data
    router.refresh()
  } catch (error) {
    console.error("DELETE ERROR:", error)
    alert("Delete failed – check console")
  }
}


  return (
    <div className="flex justify-end gap-2">
      {/* Download */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => generateRescuePDF(rescue)}
      >
        <DownloadIcon className="h-4 w-4" />
      </Button>

      {/* Edit */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleEdit}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      {/* Delete */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  )
}
