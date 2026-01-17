import { AdminSidebar } from "@/components/layout/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-10 bg-slate-50 dark:bg-slate-900">
        <AdminSidebar />
      </div>
      <main className="md:pl-64">
        {children}
      </main>
    </div>
  )
}
