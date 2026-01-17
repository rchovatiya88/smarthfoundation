import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, HeartHandshake, IndianRupee } from "lucide-react"

export default async function ReportsPage() {
  // Rescue Statistics
  const totalRescues = await prisma.rescue.count()
  const completedRescues = await prisma.rescue.count({ where: { status: "Completed" } })
  const inProgressRescues = await prisma.rescue.count({ where: { status: "In Progress" } })
  
  const rescuesByGender = await prisma.rescue.groupBy({
    by: ['gender'],
    _count: { gender: true }
  })

  const rescuesThisMonth = await prisma.rescue.count({
    where: {
      date: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      }
    }
  })

  const rescuesLastMonth = await prisma.rescue.count({
    where: {
      date: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
        lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      }
    }
  })

  // Donation Statistics
  const totalDonations = await prisma.donation.aggregate({ _sum: { amount: true } })
  const donationsThisMonth = await prisma.donation.aggregate({
    _sum: { amount: true },
    where: {
      createdAt: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      }
    }
  })

  // Assistance Statistics
  const foodProvided = await prisma.rescue.count({ where: { foodGiven: true } })
  const shelterProvided = await prisma.rescue.count({ where: { shelterGiven: true } })
  const medicalProvided = await prisma.rescue.count({ where: { medicalGiven: true } })

  const growthRate = rescuesLastMonth > 0 
    ? ((rescuesThisMonth - rescuesLastMonth) / rescuesLastMonth * 100).toFixed(1)
    : rescuesThisMonth > 0 ? 100 : 0

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Statistics</h2>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rescues</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRescues}</div>
            <p className="text-xs text-muted-foreground">
              {completedRescues} completed, {inProgressRescues} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rescuesThisMonth}</div>
            <p className="text-xs text-muted-foreground">
              {Number(growthRate) >= 0 ? '+' : ''}{growthRate}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalDonations._sum.amount?.toLocaleString('en-IN') || 0}</div>
            <p className="text-xs text-muted-foreground">
              ₹{donationsThisMonth._sum.amount?.toLocaleString('en-IN') || 0} this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assistance Provided</CardTitle>
            <HeartHandshake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{foodProvided + shelterProvided + medicalProvided}</div>
            <p className="text-xs text-muted-foreground">
              Total support instances
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Demographics */}
        <Card>
          <CardHeader>
            <CardTitle>Demographics Breakdown</CardTitle>
            <CardDescription>Distribution by gender</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rescuesByGender.map((item) => (
              <div key={item.gender || 'unknown'} className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.gender || 'Not Specified'}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: `${(item._count.gender / totalRescues) * 100}px` }}></div>
                  <span className="text-sm font-bold">{item._count.gender}</span>
                </div>
              </div>
            ))}
            {rescuesByGender.length === 0 && (
              <p className="text-sm text-muted-foreground">No data available</p>
            )}
          </CardContent>
        </Card>

        {/* Assistance Type Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Assistance Type Distribution</CardTitle>
            <CardDescription>Types of support provided</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Food Provided</span>
              </div>
              <span className="text-sm font-bold">{foodProvided}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium">Shelter Arranged</span>
              </div>
              <span className="text-sm font-bold">{shelterProvided}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium">Medical Care</span>
              </div>
              <span className="text-sm font-bold">{medicalProvided}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
          <CardDescription>Comparing current and previous month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Last Month</h4>
              <div className="text-3xl font-bold">{rescuesLastMonth}</div>
              <p className="text-sm text-muted-foreground">Rescues completed</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">This Month</h4>
              <div className="text-3xl font-bold">{rescuesThisMonth}</div>
              <p className="text-sm text-muted-foreground">Rescues completed</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm font-medium">
              {Number(growthRate) >= 0 ? '📈 Growth' : '📉 Decline'}: 
              <span className={`ml-2 text-lg font-bold ${Number(growthRate) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {Number(growthRate) >= 0 ? '+' : ''}{growthRate}%
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
