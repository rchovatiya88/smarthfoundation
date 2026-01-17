import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock Data
const recentRescues = [
    {
        id: 1,
        date: "2023-10-27",
        location: "Maninagar, Ahmedabad",
        description: "Found an elderly woman in need of medical attention. Provided first aid and shifted to a shelter.",
        status: "Completed",
        type: "Medical & Shelter"
    },
    {
        id: 2,
        date: "2023-10-26",
        location: "Satellite, Ahmedabad",
        description: "Provided food and warm blankets to a family living under the bridge.",
        status: "Completed",
        type: "Food & Supplies"
    },
    {
         id: 3,
        date: "2023-10-25",
        location: "Vastrapur, Ahmedabad",
        description: "Rescued a homeless man suffering from high fever. Admitted to Civil Hospital.",
        status: "In Progress",
        type: "Medical"
    }
]

export default function LivePage() {
  return (
    <div className="container py-12 px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">Live Impact Dashboard</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl">
            Tracking our rescues and assistance in real-time. Transparency is our core value.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
         {/* Stats Cards */}
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Currently Helping</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">
                Individuals actively receiving care
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rescued</CardTitle>
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 className="h-4 w-4 text-muted-foreground"
               >
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                 <polyline points="22 4 12 14.01 9 11.01" />
               </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">124</div>
              <p className="text-xs text-muted-foreground">
                +12 from last month
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meals Served</CardTitle>
              <UtensilsIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">5,230</div>
              <p className="text-xs text-muted-foreground">
                +450 from last month
              </p>
            </CardContent>
          </Card>
      </div>

       {/* Rescue Feed */}
       <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Rescue Stories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {recentRescues.map((rescue) => (
                 <Card key={rescue.id} className="overflow-hidden">
                    <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400">
                        {/* Placeholder for Image */}
                        <span>Photo Available in Admin</span>
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">Rescue #{rescue.id}</CardTitle>
                            <Badge variant={rescue.status === "Completed" ? "default" : "secondary"}>
                                {rescue.status}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{rescue.date} • {rescue.location}</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600 mb-2">{rescue.description}</p>
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{rescue.type}</Badge>
                    </CardContent>
                 </Card>
             ))}
          </div>
       </div>
    </div>
  )
}

function UtensilsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}
