import { prisma } from "@/lib/prisma"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"
// import { generateRescuePDF } from "@/lib/pdf-generator" // Note: Client-side only. We will need a client component for the button.
import { PDFDownloadButton } from "./pdf-button"

export default async function RescueListPage() {
  const rescues = await prisma.rescue.findMany({
    orderBy: { date: 'desc' }
  })

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">All Rescues</h2>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Individual</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rescues.map((rescue) => (
              <TableRow key={rescue.id}>
                <TableCell>{new Date(rescue.date).toLocaleDateString()}</TableCell>
                <TableCell>{rescue.location}</TableCell>
                <TableCell>
                    <div className="flex flex-col">
                        <span className="font-medium">{rescue.name || "Unknown"}</span>
                        <span className="text-xs text-muted-foreground">{rescue.gender}, {rescue.age ? `${rescue.age}y` : '?'}</span>
                    </div>
                </TableCell>
                <TableCell>
                    <Badge variant={rescue.status === "Completed" ? "default" : "secondary"}>
                        {rescue.status}
                    </Badge>
                </TableCell>
                <TableCell className="text-right">
                    <PDFDownloadButton rescue={rescue} />
                </TableCell>
              </TableRow>
            ))}
            {rescues.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                        No rescue records found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
