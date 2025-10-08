// Prisma Client singleton for Next.js (avoids multiple instances in dev)
import { PrismaClient as PrismaClientInternal } from '@prisma/client'

let prisma: PrismaClientInternal | undefined

export async function getPrisma(): Promise<PrismaClientInternal> {
  if (prisma) return prisma
  const instance = (global as any).__prisma ?? new PrismaClientInternal()
  if (process.env.NODE_ENV !== 'production') {
    ;(global as any).__prisma = instance
  }
  prisma = instance
  return instance
}

export type PrismaClient = PrismaClientInternal




