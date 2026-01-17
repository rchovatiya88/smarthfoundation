import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

// Define a type that acts as a bridge between Prisma Model and PDF Generator
interface RescueReportData {
    id: string
    date: Date
    location: string
    name: string | null
    age: number | null
    gender: string | null
    contactNumber: string | null
    condition: string | null
    needs: string | null
    description: string | null
    medicalHistory: string | null
    followUpNotes: string | null
    rescuedBy: string | null
    status: string
    foodGiven: boolean
    shelterGiven: boolean
    medicalGiven: boolean
}

export const generateRescuePDF = (rescue: RescueReportData) => {
    const doc = new jsPDF()

    // Header
    doc.setFillColor(45, 122, 79) // #2d7a4f Primary Green
    doc.rect(0, 0, 210, 40, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(22)
    doc.text("Samarth Foundation", 105, 20, { align: "center" })
    doc.setFontSize(12)
    doc.text("Rescue & Assistance Report", 105, 30, { align: "center" })
    
    // Metadata
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.text(`Report ID: ${rescue.id.substring(0, 8).toUpperCase()}`, 15, 50)
    doc.text(`Date: ${new Date(rescue.date).toLocaleDateString()}`, 150, 50)

    // Table Data
    const tableData = [
        ["Location", rescue.location],
        ["Rescued By", rescue.rescuedBy || "N/A"],
        ["Name", rescue.name || "Unknown"],
        ["Age / Gender", `${rescue.age || 'N/A'} / ${rescue.gender || 'N/A'}`],
        ["Contact Number", rescue.contactNumber || "N/A"],
        ["Condition", rescue.condition || "N/A"],
        ["Immediate Needs", rescue.needs || "N/A"],
        ["Description", rescue.description || "N/A"],
        ["Medical History", rescue.medicalHistory || "N/A"],
        ["Assistance Provided", `${rescue.foodGiven ? 'Food, ' : ''}${rescue.shelterGiven ? 'Shelter, ' : ''}${rescue.medicalGiven ? 'Medical' : ''}`],
        ["Follow-up Notes", rescue.followUpNotes || "N/A"],
        ["Status", rescue.status]
    ]

    autoTable(doc, {
        startY: 60,
        head: [['Field', 'Details']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [45, 122, 79] }, // Green header
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 50 },
            1: { cellWidth: 130 }
        }
    })

    // Footer
    const pageHeight = doc.internal.pageSize.height
    doc.setFontSize(10)
    doc.setTextColor(150)
    doc.text("Sarva Samarth Foundation - Helping people in dire need - Ahmedabad, Gujarat", 105, pageHeight - 10, { align: "center" })

    doc.save(`Rescue_Report_${rescue.id.substring(0, 8)}.pdf`)
}
