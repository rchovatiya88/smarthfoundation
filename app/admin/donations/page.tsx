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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee } from "lucide-react"

export default async function DonationsPage() {
  const donations = await prisma.donation.findMany({
    orderBy: { createdAt: 'desc' }
  })

  const totalAmount = await prisma.donation.aggregate({
    _sum: { amount: true },
    where: { status: 'success' }
  })

  const thisMonthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  const thisMonthAmount = await prisma.donation.aggregate({
    _sum: { amount: true },
    where: { 
      status: 'success',
      createdAt: { gte: thisMonthStart }
    }
  })

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Donation History</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalAmount._sum.amount?.toLocaleString('en-IN') || 0}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{thisMonthAmount._sum.amount?.toLocaleString('en-IN') || 0}</div>
            <p className="text-xs text-muted-foreground">{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            <span className="text-muted-foreground text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donations.length}</div>
            <p className="text-xs text-muted-foreground">Contribution count</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Donations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>{new Date(donation.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{donation.donorName || "Anonymous"}</span>
                        {donation.donorEmail && (
                          <span className="text-xs text-muted-foreground">{donation.donorEmail}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">₹{donation.amount.toLocaleString('en-IN')}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{donation.purpose || "General Fund"}</TableCell>
                    <TableCell>
                      <Badge variant={donation.status === "success" ? "default" : donation.status === "pending" ? "secondary" : "destructive"}>
                        {donation.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
                {donations.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                      No donations found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
