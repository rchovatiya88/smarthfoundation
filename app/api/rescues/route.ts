import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const rescue = await prisma.rescue.create({
      data: {
        location: body.location,
        name: body.name,
        age: body.age,
        gender: body.gender,
        contactNumber: body.contactNumber,
        description: body.description,
        condition: body.condition,
        needs: body.needs,
        medicalHistory: body.medicalHistory,
        followUpNotes: body.followUpNotes,
        rescuedBy: body.rescuedBy,
        foodGiven: body.foodGiven || false,
        shelterGiven: body.shelterGiven || false,
        medicalGiven: body.medicalGiven || false,
        status: body.status || 'In Progress'
      }
    })

    return NextResponse.json(rescue, { status: 201 })
  } catch (error) {
    console.error('Error creating rescue:', error)
    return NextResponse.json({ error: 'Failed to create rescue' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const rescues = await prisma.rescue.findMany({
      orderBy: { date: 'desc' }
    })
    return NextResponse.json(rescues)
  } catch (error) {
    console.error('Error fetching rescues:', error)
    return NextResponse.json({ error: 'Failed to fetch rescues' }, { status: 500 })
  }
}
