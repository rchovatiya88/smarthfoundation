
import { prisma } from "@/lib/prisma"
import { RescueForm } from "@/components/rescue/rescue-form"
import { notFound } from "next/navigation"

export default async function EditRescuePage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params

  const rescue = await prisma.rescue.findUnique({
    where: { id },
  })

  if (!rescue) return notFound()

  return <RescueForm mode="edit" initialData={rescue} />
}
