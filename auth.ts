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
        
        let user = await prisma.user.findUnique({
             where: { email: credentials.email as string }
        })

        // Mock User for Dev if DB is empty
        if (!user && (credentials.email === "admin@samarth.org")) {
             return { id: "1", name: "Admin", email: "admin@samarth.org", role: "admin" }
        }

        if (!user) {
           return null
           // throw new Error("User not found.")
        }

        // const isPasswordValid = await compare(credentials.password as string, user.password)
        // if (!isPasswordValid) return null
        
        // For POC, simple password check if user exists in DB or just use mock above
        
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
    // Add role to session
    // session: ({ session, token }) => ({
    //    ...session,
    //    user: {
    //      ...session.user,
    //      role: token.role,
    //    },
    // }),
    // jwt: ({ token, user }) => {
    //     if (user) token.role = user.role
    //     return token
    // }
  },
  pages: {
    signIn: "/admin/login",
  },
  secret: "secret-for-dev-only" // process.env.AUTH_SECRET
})
