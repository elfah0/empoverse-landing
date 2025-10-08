import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prisma client singleton loader to avoid instantiating multiple clients in dev
// Only load if the generated client exists after `prisma generate`.
// We use a dynamic import to prevent build errors before generation.
// Consumers should import from `@/lib/prisma`.
export type PrismaClientType = any
let prismaInstance: PrismaClientType | undefined

export async function getPrismaClient(): Promise<PrismaClientType> {
  if (prismaInstance) return prismaInstance
  try {
    // The generated client path is configured in prisma/schema.prisma `output`
    const { PrismaClient } = await import('./generated/prisma')
    prismaInstance = (global as any).prisma || new PrismaClient()
    if (process.env.NODE_ENV !== 'production') {
      ;(global as any).prisma = prismaInstance
    }
    return prismaInstance
  } catch (err) {
    throw new Error('Prisma client is not generated yet. Run `npx prisma generate`.')
  }
}
