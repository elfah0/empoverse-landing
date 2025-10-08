// Prisma Client singleton for Next.js (avoids multiple instances in dev)
import { PrismaClient as PrismaClientInternal } from '@prisma/client'

let prisma: PrismaClientInternal | undefined

export async function getPrisma() {
  if (prisma) return prisma
  prisma = (global as any).__prisma ?? new PrismaClientInternal()
  if (process.env.NODE_ENV !== 'production') {
    ;(global as any).__prisma = prisma
  }
  return prisma
}

export type PrismaClient = PrismaClientInternal




