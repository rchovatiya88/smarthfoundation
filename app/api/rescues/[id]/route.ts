import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const body = await req.json()

  console.log("UPDATE API HIT:", id, body)

  try {
    const updated = await prisma.rescue.update({
      where: { id },
      data: body,
    })

    console.log("UPDATE SUCCESS:", updated.id)

    return NextResponse.json(updated)
  } catch (error) {
    console.error("UPDATE FAILED:", error)

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  console.log("DELETE API HIT:", id)

  await prisma.rescue.delete({
    where: { id },
  })

  console.log("DELETE SUCCESS:", id)

  return NextResponse.json({ success: true })
}
