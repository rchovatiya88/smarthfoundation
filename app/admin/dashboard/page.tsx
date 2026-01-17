import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, Users, IndianRupee, BarChart3, FileText, Eye } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"

export default async function DashboardPage() {
    // Fetch real stats
    const totalRescues = await prisma.rescue.count()
    const activeRescues = await prisma.rescue.count({ where: { status: "In Progress" } })
    const completedRescues = await prisma.rescue.count({ where: { status: "Completed" } })
    const totalDonations = await prisma.donation.aggregate({ _sum: { amount: true } })

    // Recent rescues
    const recentRescues = await prisma.rescue.findMany({
        orderBy: { date: 'desc' },
        take: 5
    })

    // Recent donations
    const recentDonations = await prisma.donation.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        where: { status: 'success' }
    })

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button asChild>
                        <Link href="/admin/rescues/add">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Rescue
                        </Link>
                    </Button>
                </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Rescues</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalRescues}</div>
                        <p className="text-xs text-muted-foreground">
                            {completedRescues} completed
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
                        <Users className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">{activeRescues}</div>
                        <p className="text-xs text-muted-foreground">In progress</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹{totalDonations._sum.amount?.toLocaleString('en-IN') || 0}</div>
                        <p className="text-xs text-muted-foreground">All time</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {totalRescues > 0 ? Math.round((completedRescues / totalRescues) * 100) : 0}%
                        </div>
                        <p className="text-xs text-muted-foreground">Success rate</p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <Link href="/admin/rescues/list">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">View All Rescues</CardTitle>
                            <Eye className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                Manage and view all rescue records
                            </p>
                        </CardContent>
                    </Link>
                </Card>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <Link href="/admin/donations">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Donation History</CardTitle>
                            <IndianRupee className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                View all donations and contributors
                            </p>
                        </CardContent>
                    </Link>
                </Card>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <Link href="/admin/reports">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Reports & Analytics</CardTitle>
                            <FileText className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                View statistics and generate reports
                            </p>
                        </CardContent>
                    </Link>
                </Card>
            </div>
            
            {/* Recent Activities */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* Recent Rescues */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Rescues</CardTitle>
                        <CardDescription>Latest rescue operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {recentRescues.length > 0 ? (
                            <div className="space-y-3">
                                {recentRescues.map((rescue) => (
                                    <div key={rescue.id} className="flex items-start justify-between border-b pb-2 last:border-0">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">{rescue.name || "Unknown"}</p>
                                            <p className="text-xs text-muted-foreground">{rescue.location}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(rescue.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Badge variant={rescue.status === "Completed" ? "default" : "secondary"}>
                                            {rescue.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">No rescue records yet.</p>
                        )}
                    </CardContent>
                </Card>

                {/* Recent Donations */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Donations</CardTitle>
                        <CardDescription>Latest contributions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {recentDonations.length > 0 ? (
                            <div className="space-y-3">
                                {recentDonations.map((donation) => (
                                    <div key={donation.id} className="flex items-start justify-between border-b pb-2 last:border-0">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">{donation.donorName || "Anonymous"}</p>
                                            <p className="text-xs text-muted-foreground">{donation.purpose || "General Fund"}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(donation.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <p className="text-sm font-bold text-primary">₹{donation.amount.toLocaleString('en-IN')}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">No donations yet.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
