import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Simple login: admin@samarth.org with any password
        if (credentials.email === "admin@samarth.org") {
          return { id: "1", name: "Admin", email: "admin@samarth.org", role: "admin" }
        }

        // Check database for other users
        let user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })

        if (!user) {
          return null
        }

        // For demo: Accept any password for existing users
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Allow all requests
      return true
    }
  },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.AUTH_SECRET || "secret-for-dev-only"
})
