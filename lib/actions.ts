'use server'
 
import { signIn } from '@/auth'
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
        return 'Invalid credentials.'
    }
    // throw error to let Next.js handle redirect (NEXT_REDIRECT)
    throw error
  }
}
