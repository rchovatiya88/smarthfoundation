"use client"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"
import { generateRescuePDF } from "@/lib/pdf-generator"

export function PDFDownloadButton({ rescue }: { rescue: any }) {
    return (
        <Button variant="ghost" size="icon" onClick={() => generateRescuePDF(rescue)}>
            <DownloadIcon className="h-4 w-4" />
        </Button>
    )
}
