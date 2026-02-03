import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const rescues = await prisma.rescue.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(rescues)
    } catch (error) {
        console.error("GET RESCUES ERROR:", error)
        return NextResponse.json(
            { error: "Failed to fetch rescues" },
            { status: 500 }
        )
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("CREATE RESCUE HIT:", body)

        // Basic validation could happen here, but Prisma will also validate types
        const rescue = await prisma.rescue.create({
            data: {
                location: body.location,
                latitude: body.latitude ? parseFloat(body.latitude) : null,
                longitude: body.longitude ? parseFloat(body.longitude) : null,
                name: body.name || null,
                age: body.age ? parseInt(body.age) : null,
                gender: body.gender || null,
                contactNumber: body.contactNumber || null,
                description: body.description || null,
                condition: body.condition || null,
                needs: body.needs || null,
                medicalHistory: body.medicalHistory || null,
                followUpNotes: body.followUpNotes || null,
                foodGiven: body.foodGiven || false,
                shelterGiven: body.shelterGiven || false,
                medicalGiven: body.medicalGiven || false,
                status: body.status || "In Progress",
                photos: body.photos ? JSON.stringify(body.photos) : null,
                rescuedBy: body.rescuedBy || null,
                date: body.date ? new Date(body.date) : new Date(),
            }
        })

        console.log("CREATE RESCUE SUCCESS:", rescue.id)
        return NextResponse.json(rescue, { status: 201 })
    } catch (error) {
        console.error("CREATE RESCUE FAILED:", error)
        return NextResponse.json(
            { error: "Failed to create rescue" },
            { status: 500 }
        )
    }
}
