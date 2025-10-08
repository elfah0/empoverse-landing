import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getPrisma } from '@/lib/prisma'

// Ensure Node.js runtime for Prisma on platforms like Vercel
export const runtime = 'nodejs'

const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(200),
  email: z.string().trim().email('Invalid email').max(320),
  project: z.string().trim().min(5, 'Please add a few details').max(5000),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = ContactSchema.parse(json)
    const prisma = await getPrisma()
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        project: data.project,
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return NextResponse.json(
        { ok: false, error: 'Invalid input', issues: err.flatten?.() ?? undefined },
        { status: 400 },
      )
    }
    console.error('Contact submit error', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}



