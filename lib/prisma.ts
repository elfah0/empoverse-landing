// Prisma Client singleton for Next.js (avoids multiple instances in dev)
// The generated client is configured to output to `lib/generated/prisma`.

let prisma: any

export async function getPrisma() {
  if (prisma) return prisma
  const { PrismaClient } = await import('./generated/prisma')
  prisma = (global as any).__prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') {
    ;(global as any).__prisma = prisma
  }
  return prisma
}

export type PrismaClient = Awaited<ReturnType<typeof getPrisma>>




